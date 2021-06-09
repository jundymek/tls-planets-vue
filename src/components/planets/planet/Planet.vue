<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ rotationPeriod }}</p>
    <p>{{ climate }}</p>
    <p>{{ gravity }}</p>
    <p>{{ created }}</p>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  props: ['planet'],
  data: function () {
    return {
      name: this.planet.name,
      rotationPeriod: this.planet.rotation_period,
      climate: this.planet.climate,
      gravity: this.planet.gravity,
      created: new Date(Date.parse(this.planet.created)).toLocaleString(),
      url: this.planet.url
    }
  }
}
</script>

<style lang="scss">
</style>
