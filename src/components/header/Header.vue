<template>
  <header class="header">
    <router-link to="/" class="header__link" title="Home">
      <h1 class="header__title">
        <span class="header__title--first">Recruitment</span>
        <span class="header__title--second"> task</span>
        <span class="header__title--third"> - planets</span>
      </h1>
    </router-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  margin: 40px 0;
  @media (max-width: $phone) {
    margin-bottom: 10px;
  }
  &__link {
    text-decoration: none;
  }
  &__title {
    margin: 20px 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 400;
    @media (max-width: $desktop) {
      font-size: 40px;
    }
    @media (max-width: $phone) {
      font-size: 22px;
    }
    &--first {
      color: #b27c17;
    }
    &--second {
      color: #93bf3a;
    }
    &--third {
      color: #7faa8c;
    }
  }
}
</style>
