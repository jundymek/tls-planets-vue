<template>
  <el-pagination
    :small="windowWidth < 768"
    background
    layout="prev, pager, next"
    :total="totalPages * 10"
    @next-click="$router.push({ name: 'Home', params: { id: parseInt($route.params.id) + 1 } })"
    @prev-click="$router.push({ name: 'Home', params: { id: parseInt($route.params.id) - 1 } })"
    @current-change="handleChangeCurrentPage"
    :current-page="parseInt($route.params.id)"
  >
  </el-pagination>
</template>

<script>
import store from '@/store/index'
export default {
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    totalPages: function () {
      return store.state.totalPages
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
</script>

<style lang="scss">
.el-pagination {
  text-align: center;
  padding: 40px 0;
}

.el-scrollbar {
  background: $background-color;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: transparent;
  border: 1px solid $border-color;
  border-radius: 0;
  color: $text-color;
  &:not(.disabled).active {
    background: #93bf3a;
  }
}
</style>
