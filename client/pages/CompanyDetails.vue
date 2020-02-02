<template>
  <div class="container bg-white shadow mt-5 p-4">
    <p>
      <strong>Legal Name Of Business:</strong>
      {{company.businessLegalName}}
    </p>
    <p>
      <strong>EIN:</strong>
      {{company.ein}}
    </p>
    <p>
      <strong>Corporate Address:</strong>
      {{company.corporateAddress}}
    </p>
    <p>
      <strong>Contact Name:</strong>
      {{company.contactName}}
    </p>
    <p>
      <strong>Phone Number:</strong>
      {{company.phoneNumber}}
    </p>
    <p>
      <strong>Email:</strong>
      {{company.email}}
    </p>
    <p>
      <strong>State Of Incorporation:</strong>
      {{company.stateOfIncorporation}}
    </p>
    <p>
      <strong>Date Of Incorporation:</strong>
      {{company.dateOfIncorporation}}
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('this.$route.params.id', this.$route.params.id)
    this.$store.dispatch('fetchSingleContact', this.$route.params.id)
  },
  computed: {
    company() {
      return this.$store.state.selectedCompany
    }
  }
}
</script>

<style>
</style>