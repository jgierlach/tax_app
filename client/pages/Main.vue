<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Flash from '@components/Flash.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Flash,
    Navbar
  }
}
</script>
