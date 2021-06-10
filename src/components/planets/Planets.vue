<template>
  <div class="main-wrapper">
    <h1 class="title">
      <span class="title--first">Recruitment</span>
      <span class="title--second"> task</span>
      <span class="title--third"> - planets</span>
    </h1>
    <loading
      :active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      background-color="#2e2a2a"
      color="#fff"
      :lock-scroll="true"
    />
    <el-select v-model="selected" placeholder="Filter by climate" clearable>
      <el-option
        v-for="(item, index) in filterOptions"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
      </el-option>
    </el-select>
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
    <el-pagination
      v-if="!isLoading"
      background
      layout="prev, pager, next"
      :total="totalPages * 10"
      @next-click="fetchPlanetsData(nextPage)"
      @prev-click="fetchPlanetsData(prevPage)"
      @current-change="handleCurrentChange"
      :current-page="parseInt($route.params.id)"
    >
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
      filteredPlanets: [],
      isLoading: false,
      totalPages: null,
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      filterOptions: [],
      selected: null
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
          this.filteredPlanets = this.planets
          this.totalPages = response.data.count / 10
          this.nextPage = pageNumber + 1
          this.prevPage = pageNumber - 1
          this.isLoading = false
          this.filterOptions = this.getUniqueSelectData(
            response.data.results.map((item) => ({
              value: item.climate,
              label: item.climate
            }))
          )
        }
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    handleCurrentChange (val) {
      this.$router.push({ name: 'Home', params: { id: val } })
    },
    getUniqueSelectData (options) {
      const unique = [
        ...new Set(options.map((item) => JSON.stringify(item)))
      ].map((string) => JSON.parse(string))
      return unique
    },
    filterPlanets (climate) {
      const filtered = this.planets.filter((item) => item.climate === climate)
      this.filteredPlanets = filtered
      console.log(filtered)
    }
  },
  async mounted () {
    console.log(this.$route.params.id)
    this.fetchPlanetsData(this.$route.params.id)
  },
  watch: {
    $route (to, from) {
      this.fetchPlanetsData(this.$route.params.id)
      this.selected = null
    },
    selected: function () {
      console.log(this.selected)
      if (!this.selected) {
        this.filteredPlanets = this.planets
      } else {
        this.filterPlanets(this.selected)
      }
    }
  }
}
</script>

<style lang="scss" >
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
.el-pagination {
  text-align: center;
  padding: 40px 0;
}
.el-select {
  width: 200px;
  align-self: flex-end;
  border-radius: 0;
}
.el-input__inner {
  background: $background-color;
  color: $text-color;
  border-radius: 0;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: $text-color;
}

.el-select .el-input__inner:focus {
  border-color: $text-color;
}

.el-select-dropdown {
  border-radius: 0;
  &__item {
    color: $text-color;
  }
  &__item.selected {
    color: #93bf3a;
  }
  &__item.hover {
    background: unset;
    &:hover {
      color: rgb(121, 117, 117);
    }
  }
}

.el-scrollbar {
  background: $background-color;
}
</style>
