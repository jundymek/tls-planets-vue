<template>
  <div>
    <h1 class="title">Recruitment task - planets</h1>
    <div v-for="planet in planets" :key="planet.name">
      <Planet :planet="planet"/>
    </div>
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
    axios.get('https://swapi.dev/api/planets/').then(response => {
      console.log(response.data.results)
      this.planets = response.data.results
    })
  }
}
</script>

<style lang="scss">
.title {
  color: red;
}
</style>
