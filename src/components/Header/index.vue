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
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
