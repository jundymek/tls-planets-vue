<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
#app {
  min-height: calc(100vh - 20px);
}

* {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: $background-color;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
