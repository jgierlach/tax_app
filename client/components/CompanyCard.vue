<template>
  <div class="m-4">
    <div class="card text-center shadow mt-4 mb-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{company.businessLegalName}}</h5>
        <!-- <p class="card-text">{{}}</p> -->
        <button @click="fullDetails" class="btn btn-primary">See Full Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyDetails from './CompanyDetails.vue'

export default {
  props: ['company'],
  methods: {
    // fullDetails() {
    //   this.$router.push({
    //     name: CompanyDetails,
    //     params: { id: this.company._id }
    //   })
    // }
    fullDetails() {
      this.$router.push(`/companies/${this.company._id}`)
    }
  }
}
</script>

<style>
</style>