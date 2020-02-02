<template>
  <div class="container">
    <h1 class="text-center mt-4">Companies</h1>
    <div class="row">
      <CompanyCard v-for="company in companies" :company="company" :key="company._id" />
    </div>
  </div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue'

export default {
  mounted() {
    this.$store.dispatch('fetchContacts')
  },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  },
  components: {
    CompanyCard
  }
}
</script>

<style>
</style>