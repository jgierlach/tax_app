<template>
  <!-- <div class>
    <Flash />
    <div
      class="w-full h-12 text-brown bg-gold-lightest flex items-center justify-center"
      v-if="auth && !confirmed"
    >
      Please confirm your email address. Didn't receive an email?
      <span
        @click="resendEmailConfirm"
        class="cursor-pointer ml-2 border-b-2 border-brown hover:text-brown-darkest"
      >Click here to resend email.</span>
    </div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="py-5 mx-10 flex justify-between items-center">
      <router-link to="/" class="no-underline text-gold">Mevn</router-link>
      <div v-if="!auth">
        <router-link class="no-underline text-brown" to="/auth/login">Sign In</router-link>
        <router-link
          class="no-underline text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest rounded-full border-brown ml-3"
          to="/auth/register"
        >Join Now</router-link>
      </div>
      <div v-else>
        <router-link to="/contacts" class="no-underline text-gold">Contacts</router-link>
        <span class="cursor-pointer text-brown hover:text-brown-darkest" @click="unsetAuth">Logout</span>
      </div>
    </div>
  </div>-->
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
    <router-link class="navbar-brand" to="/">HTI Taxes</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav"></ul>
    </div>
  </nav>
</template>

<script>
import Flash from './Flash.vue'

export default {
  mounted() {
    this.$forceUpdate()
  },
  computed: {
    auth() {
      return this.$store.state.auth.user
    }
  },
  components: {
    Flash
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19);
}
</style>