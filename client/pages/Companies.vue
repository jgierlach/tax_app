<template>
  <div class="container">
    <h1 class="text-center mt-4">Companies</h1>
    <h1 v-for="company in companies" :key="company._id">{{company.name}}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchContacts')
  },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  }
}
</script>

<style>
</style>