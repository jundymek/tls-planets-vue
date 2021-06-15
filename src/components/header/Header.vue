<template>
  <header>
    <h1 class="title">
      <span class="title--first">Recruitment</span>
      <span class="title--second"> task</span>
      <span class="title--third"> - planets</span>
    </h1>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.title {
  margin: 20px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 60px;
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
</style>
