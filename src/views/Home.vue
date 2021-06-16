<template>
  <div class="home">
    <div class="content-wrapper">
      <Header />
      <Planets />
    </div>
    <Footer />
  </div>
</template>

<script>
import Planets from '@/components/planets/Planets'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Planets,
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.content-wrapper {
  padding-bottom: 2.5rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 10px 40px 10px;
}
.home {
  position: relative;
}
</style>
