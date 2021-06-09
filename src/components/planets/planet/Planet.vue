<template>
  <el-card class="box-card">
    <div class="planet-header">
      <h2 class="planet-header__title" :style="{'color': styles.color}">{{ name }}</h2>
      <p class="planet-header__subtitle">{{ climate }} planet</p>
      <div class="planet-image-wrapper" :style="{'border-color': styles.color}">
        <div class="planet-image" :style="{'background-image': 'url(' + require(`@/assets/images/${styles.image}`) + ')'}"></div>
      </div>
    </div>
    <div
      v-for="(value, key) in {'Rotation period': rotationPeriod, 'Climate': climate, 'Gravity': gravity, 'Created':created, 'Url':url}"
      :key="key"
      class="text item"
    >
      {{ key }} - <span :style="{'color': styles.color}">{{value}}</span>
    </div>
  </el-card>
</template>

<script>
import { planetStyles } from './helpers'
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
    styles: function () {
      const commons = Object.keys(planetStyles).filter((item) =>
        this.climate === item
      )
      if (commons.length) {
        return planetStyles[commons[0]]
      } else {
        return planetStyles.murky
      }
    }
  }
}
</script>

<style lang="scss">
.box-card {
  border-radius: 0;
  background: $background;
  color: $text-color;
}
.planet-header {
  margin: 5px 0 25px 0;
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
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  border-radius: 50%;
  border: 8px solid rgb(83, 78, 78);
  overflow: hidden;
  position: relative;
}
</style>
