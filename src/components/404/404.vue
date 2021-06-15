<template>
  <div class="wrapper-404">
    <Header />
    <div class="content">
      <p class="text">404 - page not found !!!</p>
      <router-link to="/">
        <el-link type="primary">Back to main</el-link>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  components: { Header }
}
</script>

<style lang="scss" scoped>
.wrapper-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.text {
  text-align: center;
  margin-bottom: 100px;
  color: $text-color;
  font-size: 3em;
}

</style>
