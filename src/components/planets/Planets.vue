<template>
  <div class="main-wrapper">
    <Header />
    <loading
      :active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      background-color="#2e2a2a"
      color="#fff"
      :lock-scroll="true"
    />
    <FilterSelect v-if="planets" :planets="planets" @filterPlanets="filterPlanets"/>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="planet in filteredPlanets"
        :key="planet.name"
      >
        <Planet :planet="planet" />
      </el-col>
    </el-row>
    <Pagination v-if="!isLoading && totalPages > 1" :totalPages="totalPages" @fetchPlanetsData="fetchPlanetsData" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/header/Header.vue'
import Planet from './planet/Planet.vue'
import FilterSelect from './filterSelect/FilterSelect.vue'
import Pagination from './pagination/Pagination.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'Planets',
  components: { Header, Planet, Loading, FilterSelect, Pagination },
  data () {
    return {
      planets: null,
      filteredPlanets: [],
      isLoading: false,
      totalPages: null
    }
  },
  methods: {
    async fetchPlanetsData (pageNumber) {
      try {
        this.isLoading = true
        const response = await axios.get(
          `https://swapi.dev/api/planets/?page=${pageNumber}`
        )
        if (response.status === 200) {
          this.planets = response.data.results
          this.filteredPlanets = this.planets
          this.totalPages = response.data.count / 10
          this.isLoading = false
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
        this.filteredPlanets = this.planets
      } else {
        const filtered = this.planets.filter((item) => item.climate === climate)
        this.filteredPlanets = filtered
      }
    }
  },
  async mounted () {
    this.fetchPlanetsData(this.$route.params.id)
  },
  watch: {
    $route (to, from) {
      this.fetchPlanetsData(this.$route.params.id)
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
.title {
  margin: 20px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 60px;
  @media (max-width: $desktop) {
    font-size: 40px;
  }
  @media (max-width: $phone) {
    font-size: 22px;
  }
  &--first {
    color: #b27c17;
  }
  &--second {
    color: #93bf3a;
  }
  &--third {
    color: #7faa8c;
  }
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
