<template>
  <div>
    <h1 class="title">Recruitment task - planets</h1>
    <loading
      :active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      background-color="#2e2a2a"
      color="#fff"
      :lock-scroll="true"
    />
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        v-for="planet in planets"
        :key="planet.name"
      >
        <Planet :planet="planet" />
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="totalPages*10" @next-click="fetchPlanetsData(nextPage)" @prev-click="fetchPlanetsData(prevPage)" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import Planet from './planet/Planet.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'Planets',
  components: { Planet, Loading },
  data () {
    return {
      planets: null,
      isLoading: false,
      totalPages: null,
      currentPage: 1,
      nextPage: null,
      prevPage: null
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
          console.log(response.data.count)
          this.planets = response.data.results
          this.totalPages = response.data.count / 10
          this.nextPage = pageNumber + 1
          this.prevPage = pageNumber - 1
          this.isLoading = false
        }
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    handleCurrentChange (val) {
      this.fetchPlanetsData(val)
    }
  },
  async mounted () {
    this.fetchPlanetsData(1)
  }
}
</script>

<style lang="scss">
.title {
  margin: 20px 0;
  text-align: center;
  color: red;
}
.bg-purple-dark {
  background: #99a9bf;
}
.el-col {
  padding: 10px 0;
}
.el-pagination {
  text-align: center;
}
</style>
