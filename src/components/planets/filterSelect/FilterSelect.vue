<template>
  <el-select v-model="selected" placeholder="Filter by climate" clearable>
      <el-option
        v-for="(item, index) in filterOptions"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
      </el-option>
    </el-select>
</template>

<script>
import store from '@/store/index'
export default {
  props: ['planets'],
  data () {
    return {
      selected: null
    }
  },
  computed: {
    filterOptions: function (props) {
      if (store.state.allPlanets) {
        return this.getUniqueSelectData(
          store.state.allPlanets.map((item) => ({
            value: item.climate,
            label: item.climate
          }))
        )
      } return null
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
    selected: function () {
      this.$emit('filterPlanets', this.selected)
    },
    planets: function () {
      this.selected = null
    },
    '$store.state.filteredPlanets': function () {
      console.log('this.$store.state.filteredPlanets')
      if (store.state.allPlanets === store.state.filteredPlanets) { this.selected = null }
    }
  }
}
</script>

<style lang="scss">
.el-select {
  width: 200px;
  align-self: flex-end;
  border-radius: 0;
  margin-bottom: 10px;
  @media (max-width: $phone) {
    align-self: center;
    width: 100%;
  }
}
.el-input__inner {
  background: transparent;
  color: $text-color;
  border-radius: 0;
  border-color: $border-color;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: $border-color;
}

.el-select .el-input__inner:focus {
  border-color: $border-color;
}

.el-select-dropdown {
  border-radius: 0;
  border-color: $border-color;
  &__list {
    padding: 10px 0;
    background: black;
  }
  &__item {
    color: $text-color;
    padding-left: 15px;
  }
  &__item.selected {
    color: #93bf3a;
  }
  &__item.hover {
    background: unset;
    &:hover {
      color: rgb(121, 117, 117);
    }
  }
}
.popper__arrow {
  display: none !important;
}
</style>
