export default {
  props: { totalPages: Number },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    },
    handleChangeCurrentPage (val) {
      this.$router.push({ name: 'Home', params: { id: val } }).catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
      })
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  }
}
