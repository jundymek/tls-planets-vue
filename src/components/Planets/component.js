import axios from 'axios'
import Planet from '@/components/Planet'
import FilterSelect from '@/components/FilterSelect'
import Pagination from '@/components/Pagination'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'Planets',
  components: { Planet, Loading, FilterSelect, Pagination },
  data () {
    return {
      planets: [],
      filteredPlanets: [],
      isLoading: false,
      totalPages: null,
      error: undefined
    }
  },
  computed: {
    currentPagePlanets: {
      get: function () {
        return this.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      },
      set: function () {
        return this.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      }

    }
  },
  methods: {
    async fetchAllPlanets (next) {
      const url = next ? next.replace('https://localhost:8000', 'https://swapi.dev') : 'https://swapi.dev/api/planets'
      let planets = this.planets
      try {
        this.isLoading = true
        const response = await axios.get(url)
        if (response.status === 200) {
          this.totalPages = response.data.count / 12
          planets = [...this.planets, ...response.data.results]
          if (response.data.next === null) {
            this.planets = planets
            this.filteredPlanets = planets
            this.isLoading = false
          } else {
            this.planets = planets
            this.fetchAllPlanets(response.data.next)
          }
        }
      } catch (error) {
        this.isLoading = false
        if (error.response.status === 404) {
          this.$router.push('404')
        } else if (error.response.status === 429) {
          this.error = "Dear Recruiter. Unfortunately, due to the intensive work on the task, I made so many requests to the API that I obtained the status of 429, which means that the planets will not appear in the place intended for this. I can assure you that I made every effort to make everything work as it should, but unfortunately I couldn't predict everything. API limitations and such things just happen. I hope that in a few hours the situation will return to normal and you will be able to see the effects of my work ..."
        } else {
          this.error = error.message
        }
        console.log(error.message)
      }
    },
    filterPlanets (climate) {
      if (!climate) {
        this.filteredPlanets = this.planets
      } else {
        const filtered = this.planets.filter(
          (item) => item.climate === climate
        )
        this.filteredPlanets = filtered
        if (this.$route.params.id !== '1') {
          this.$router.push({ name: 'Home', params: { id: 1 } }).catch(error => {
            if (error.name !== 'NavigationDuplicated') {
              throw error
            }
          })
        }
      }
    }
  },
  async mounted () {
    this.fetchAllPlanets()
  },
  watch: {
    $route () {
      if (this.filteredPlanets.length !== this.planets.length) {
        this.currentPagePlanets = this.filteredPlanets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 10) + 12)
      } else {
        this.currentPagePlanets = this.planets.slice((this.$route.params.id - 1) * 12, ((this.$route.params.id - 1) * 12) + 12)
      }
    },
    filteredPlanets () {
      this.totalPages = this.filteredPlanets.length / 12
    }
  }
}
