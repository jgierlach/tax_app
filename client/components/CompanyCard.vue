<template>
  <div class="m-4">
    <div class="card text-center shadow mb-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{company.businessLegalName}}</h5>
        <button @click="fullDetails" class="btn btn-primary">See Full Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['company'],
  methods: {
    fullDetails() {
      this.$router.push(`/companies/${this.company._id}`)
    }
  }
}
</script>

<style>
</style>