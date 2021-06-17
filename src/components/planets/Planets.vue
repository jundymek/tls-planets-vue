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
      isLoading: false
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
        return store.state.totalPages
      },
      set: function () {
        return store.state.totalPages
      }
    }
  },
  methods: {
    async recurenceFetchPlanets () {

    },
    async fetchAllPlanets (next) {
      const url = next ? next.replace('http', 'https') : 'https://swapi.dev/api/planets'
      let planets = []
      try {
        this.isLoading = true
        const response = await axios.get(url)
        if (response.status === 200) {
          planets = [...store.state.allPlanets, ...response.data.results]
          if (response.data.next === null) {
            store.commit('setTotalPages', planets.length / 12)
            store.commit('setFilteredPlanets', planets)
            store.commit('setAllPlanets', planets)
            this.isLoading = false
          } else {
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
      if (!climate) {
        store.commit('setFilteredPlanets', store.state.allPlanets)
      } else {
        const filtered = store.state.allPlanets.filter(
          (item) => item.climate === climate
        )
        store.commit('setFilteredPlanets', filtered)
        store.commit('setTotalPages', filtered.length / 12)
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
  },
  watch: {
    $route () {
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
