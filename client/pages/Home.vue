<template>
  <div class="container">
    <!-- <h1 class="text-center mt-4" v-if="!auth">Mevn Auth</h1> -->
    <!-- <h1 class="text-center" v-else>Welcome, {{ user.name }}</h1> -->
    <IntakeForm />
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
