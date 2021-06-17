<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

* {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: $background-color;
  background-image: url('../src/assets/images/sky_background1.jpeg');
  background-blend-mode: color-burn;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  height:100%;
}
</style>
