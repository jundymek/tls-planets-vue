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
import Planets from '@/components/Planets'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 10px 40px 10px;
}
.home {
  position: relative;
  min-height: 100vh;
}
</style>
