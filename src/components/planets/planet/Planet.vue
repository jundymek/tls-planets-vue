<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ name }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >Operation button</el-button
      >
    </div>
    <div
      v-for="o in [rotationPeriod, climate, gravity, created, url]"
      :key="o"
      class="text item"
    >
      {{  o }}
    </div>
  </el-card>
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
