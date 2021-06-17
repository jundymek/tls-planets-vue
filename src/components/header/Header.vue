<template>
  <header class="header">
    <a :href="`${publicPath}`" class="header__link" title="Home">
      <h1 class="header__title">
        <div class="header__image-wrapper">
          <img
            src="@/assets/images/death_star.png"
            alt="Death star"
            class="header__image"
          />
        </div>
        <div class="header__title-text">
          <span class="header__title-text--first">SWAPI</span>
          <span class="header__title-text--second"> planets</span>
        </div>
      </h1>
    </a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: 20px 20px;
  @media (max-width: $phone) {
    margin-bottom: 10px;
  }

  &__link {
    text-decoration: none;
  }

  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    display: flex;
    font-weight: 400;
    @media (max-width: $phone) {
      font-size: 30px;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  &__title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 28px;
    font-weight: bold;
    margin-left: -10px;

    &--first {
      color: #b27c17;
    }

    &--second {
      color: #93bf3a;
    }
  }

  &__image-wrapper {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: $phone) {
      width: 80px;
      height: 80px;
    }
  }

  &__image {
    width: 70%;
    height: 70%;
  }
}
</style>
