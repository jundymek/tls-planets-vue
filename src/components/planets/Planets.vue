<template>
  <h1 class="title">Recruitment task - planets</h1>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Planets',
  data () {
    return {
      planets: null
    }
  },
  mounted () {
    axios.get('https://swapi.dev/api/planets/').then(response => {
      console.log(response.data.results)
      this.planets = response
    })
  }
}
</script>

<style lang="scss">
.title {
  color: red;
}
</style>
