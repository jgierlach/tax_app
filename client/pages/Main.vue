<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Flash from '@components/Flash.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Flash,
    Navbar,
    Footer
  }
}
</script>
