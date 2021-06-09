<template>
  <div>
    <h1 class="title">Recruitment task - planets</h1>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" v-for="planet in planets" :key="planet.name">
        <Planet :planet="planet" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import Planet from './planet/Planet.vue'
export default {
  name: 'Planets',
  components: { Planet },
  data () {
    return {
      planets: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/')
      if (response.status === 200) {
        this.planets = response.data.results
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss">
.title {
  color: red;
}
.bg-purple-dark {
  background: #99a9bf;
}
.el-col {
    padding: 10px 0;
  }
</style>
