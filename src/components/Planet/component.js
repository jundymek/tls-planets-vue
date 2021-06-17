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
