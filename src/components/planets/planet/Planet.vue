<template>
  <el-card class="box-card">
    <div class="planet-header">
      <h2 class="planet-header__title" :style="{ color: styles.color }">
        {{ name }}
      </h2>
      <p class="planet-header__subtitle">{{ climate }} planet</p>
    </div>
    <div class="planet-image-wrapper" :style="{ 'border-color': styles.color }">
      <div
        class="planet-image"
        :style="{
          'background-image':
            'url(' + require(`@/assets/images/${styles.image}`) + ')',
        }"
      ></div>
    </div>
    <ul class="planet-data">
      <li
        v-for="(value, key) in {
          'Rotation period': rotationPeriod,
          Climate: climate,
          Gravity: gravity,
          Created: created,
        }"
        :key="key"
        class="text item"
      >
        {{ key }} - <span :style="{ color: styles.color }">{{ value }}</span>
      </li>
      <li class="text item">Url: <a :href="url" class="planet-data__url" :style="{ color: styles.color }">{{url}}</a></li>
    </ul>
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
      const commons = Object.keys(planetStyles).filter(
        (item) => this.climate === item
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
.el-card {
  border-radius: 0;
  border-color: $border-color;
  background: $background-color;
  color: $text-color;
  height: 100%;
  min-height: 450px;

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 410px;
  }
}
.planet-header {
  margin: 0 0 25px 0;
  display: flex;
  flex-direction: column;
  &__title {
    margin: 0;
  }
  &__subtitle {
    margin: 0px;
    font-size: 12px;
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
  margin-top: -40px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  border-radius: 50%;
  border: 8px solid rgb(83, 78, 78);
  overflow: hidden;
  position: relative;
}

.planet-data {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  &__url {
    text-decoration: underline;
    cursor: pointer;
    color: inherit;
  }
}
</style>
