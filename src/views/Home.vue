<template>
  <div class="home">
    <Header />
    <Planets />
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
