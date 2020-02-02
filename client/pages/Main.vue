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

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19);
}
</style>
