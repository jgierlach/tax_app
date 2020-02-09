<template>
  <div class="container">
    <!-- <h1 class="text-center mt-4" v-if="!auth">Mevn Auth</h1> -->
    <!-- <h1 class="text-center" v-else>Welcome, {{ user.name }}</h1> -->
    <div class="row">
      <div class="col-lg-6 col-md-6 col-12">
        <div class="bg-white shadow p-2 mt-5">
          <h1 class="mt-5 text-center">You're almost there!</h1>
          <h1 class="text-center">We just need a few details to make your business compliant!</h1>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <IntakeForm />
      </div>
    </div>
  </div>
</template>

<script>
import IntakeForm from '../components/IntakeForm.vue'

export default {
  components: {
    IntakeForm
  }
}
</script>

<style scoped>
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
