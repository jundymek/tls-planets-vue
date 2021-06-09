<template>
  <el-card class="box-card">
    <div class="planet-header">
      <h2 class="planet-header__title">{{ name }}</h2>
      <p class="planet-header__subtitle">{{ climate }} planet</p>
      <div class="planet-image-wrapper" >
        <div class="planet-image" :style="{'background-image': 'url(' + require(`@/assets/images/${image}`) + ')'}"></div>
      </div>
    </div>
    <div
      v-for="o in [rotationPeriod, climate, gravity, created, url]"
      :key="o"
      class="text item"
    >
      {{ o }}
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
  },
  computed: {
    image: function () {
      const planetImages = {
        arid: 'red.svg',
        frozen: 'grey.svg',
        temperate: ['blue.svg', 'earth.svg'][Math.floor(Math.random() * 2)],
        'temperate, tropical': 'purple.svg',
        murky: 'saturn.svg'

      }
      const commons = Object.keys(planetImages).filter((item) =>
        this.climate === item
      )
      if (commons.length) {
        console.log(commons)
        return planetImages[commons[0]]
      } else {
        console.log(this.climate.split(','))
        return 'earth.svg'
      }
    }
  }
}
</script>

<style lang="scss">
.box-card {
  border-radius: 0;
  background: $background;
  color: white;
}
.planet-header {
  margin: 5px 0 10px 0;
  display: flex;
  flex-direction: column;
  &__title {
    margin: 0;
  }
  &__subtitle {
    margin: 0px;
    font-size: 10px;
  }
}
.planet-image {
  width: 120%;
  height: 120%;
  align-self: center;
  background-size: cover;
  overflow: hidden;
  position: absolute;
}

.planet-image-wrapper {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  border-radius: 50%;
  border: 16px solid rgb(83, 78, 78);
  overflow: hidden;
  position: relative;
}
</style>
