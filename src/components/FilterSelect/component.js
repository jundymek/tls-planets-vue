export default {
  props: ['planets'],
  data () {
    return {
      selectedClimate: null
    }
  },
  computed: {
    filterOptions: function (props) {
      return this.getUniqueSelectData(
        props.planets.map((item) => ({
          value: item.climate,
          label: item.climate
        }))
      )
    }
  },
  methods: {
    getUniqueSelectData (options) {
      const unique = [
        ...new Set(options.map((item) => JSON.stringify(item)))
      ].map((string) => JSON.parse(string)).sort((a, b) => a.label.localeCompare(b.label))
      return unique
    }
  },
  watch: {
    selectedClimate: function () {
      this.$emit('filterPlanets', this.selectedClimate)
    },
    planets: function () {
      this.selectedClimate = null
    }
  }
}
