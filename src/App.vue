<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
@font-face {
  font-family: "StarWars";
  src: local("StarWars"),
    url(~@/assets/fonts/StarWars/starwars.woff) format("woff");
}

* {
  font-family: "Source Code Pro", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-image: url("~@/assets/images/sky_background.jpeg");
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100%;
}

</style>
