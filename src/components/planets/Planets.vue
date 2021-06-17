<template>
  <div class="main-wrapper">
    <loading
      :active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      background-color="#2e2a2a"
      color="#fff"
      :lock-scroll="true"
    />
    <FilterSelect
      v-if="planets"
      :planets="planets"
      @filterPlanets="filterPlanets"
    />
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="planet in currentPagePlanets"
        :key="planet.name"
      >
        <Planet :planet="planet" />
      </el-col>
    </el-row>
    <Pagination
      v-if="!isLoading && totalPages > 1"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Planet from './planet/Planet.vue'
import FilterSelect from './filterSelect/FilterSelect.vue'
import Pagination from './pagination/Pagination.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import store from '../../store/index'
export default {
  name: 'Planets',
  components: { Planet, Loading, FilterSelect, Pagination },
  data () {
    return {
      planets: [],
      filteredPlanets: [],
      isLoading: false
      // totalPages: null
    }
  },
  computed: {
    currentPagePlanets: {
      get: function () {
        return store.state.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      },
      set: function () {
        store.state.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      }

    },
    totalPages: {
      get: function () {
        return store.state.filteredPlanets.length / 12
      },
      set: function () {
        return store.state.filteredPlanets.length
      }
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  methods: {
    async recurenceFetchPlanets () {

    },
    async fetchAllPlanets (next) {
      const url = next ? next.replace('http', 'https') : 'https://swapi.dev/api/planets'
      let planets = this.planets
      console.log(store.state.allPlanets)

      try {
        this.isLoading = true
        const response = await axios.get(url)
        if (response.status === 200) {
          this.totalPages = response.data.count / 12
          planets = [...this.planets, ...response.data.results]
          if (response.data.next === null) {
            // this.planets = planets
            this.filteredPlanets = planets
            store.commit('setFilteredPlanets', planets)
            store.commit('setAllPlanets', planets)
            this.isLoading = false
          } else {
            this.planets = planets
            store.commit('setAllPlanets', planets)
            store.commit('setFilteredPlanets', planets)
            this.fetchAllPlanets(response.data.next)
          }
        }
      } catch (error) {
        this.isLoading = false
        if (error.response.status === 404) {
          this.$router.push('404')
        }
        console.log(error)
      }
    },

    filterPlanets (climate) {
      console.log(store.state.totalPages)
      if (!climate) {
        this.filteredPlanets = this.planets
        store.commit('setFilteredPlanets', store.state.allPlanets)
      } else {
        const filtered = store.state.allPlanets.filter(
          (item) => item.climate === climate
        )
        this.totalPages = filtered.length / 12
        store.commit('setFilteredPlanets', filtered)
        // this.filteredPlanets = filtered
        if (this.$route.params.id !== '1') {
          this.$router.push({ name: 'Home', params: { id: 1 } }).catch(error => {
            if (error.name !== 'NavigationDuplicated') {
              throw error
            }
          })
        }
      }
    }
  },
  async mounted () {
    this.fetchAllPlanets()
    console.log(store.state.planets)
  },
  watch: {
    $route (to, from, next) {
      console.log(to, from, next)
      if (store.state.filteredPlanets.length !== store.state.allPlanets.length) {
        this.currentPagePlanets = store.state.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 10) + 12)
      } else {
        this.currentPagePlanets = store.state.allPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      }
    }
  }
}
</script>

<style lang="scss">
.main-wrapper {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.bg-purple-dark {
  background: #99a9bf;
}
.el-col {
  padding: 10px 10px;
}

.el-scrollbar {
  background: $background-color;
}
</style>
