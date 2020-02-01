<template>
  <form class="bg-white p-4 mt-5 mb-5 shadow">
    <h1 class="text-center">Intake Form</h1>
    <div class="form-group">
      <label for="formGroupExampleInput">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Example input"
        v-model="fullName"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Email</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Phone Number</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="phoneNumber"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">EIN</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="ein"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Corporate Address</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="corporateAddress"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">State Of Declaration</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="stateOfDeclaration"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Date Of Incorporation</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input"
        v-model="dateOfIncorporation"
      />
    </div>
    <hr class="mb-4" />
    <button class="btn btn-primary btn-lg" @click="submit" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      phoneNumber: '',
      ein: '',
      corporateAddress: '',
      stateOfDeclaration: '',
      dateOfIncorporation: ''
    }
  },
  methods: {
    submit() {
      this.$router.push('/submission-confirmed')
    }
  },
  computed: {
    payload() {
      return {
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        ein: this.ein,
        corporateAddress: this.corporateAddress,
        stateOfDeclaration: this.stateOfDeclaration,
        dateOfIncorporation: this.dateOfIncorporation
      }
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19);
}

.bg-custom {
  background: rgb(245, 249, 254);
}
</style>