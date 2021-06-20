<template>
  <header class="header">
    <h1 class="header__title">
      <a :href="`${publicPath}`" class="header__link" title="Home">
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
      </a>
    </h1>
  </header>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
