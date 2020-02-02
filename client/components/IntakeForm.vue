<template>
  <transition name="fade" appear>
    <form class="bg-white p-4 mt-5 mb-5 shadow border-rounded">
      <h1 class="text-center">Information For Compliance</h1>
      <div class="form-group">
        <label for="formGroupExampleInput">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="John Doe"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Email</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="johndoe@email.com"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Phone Number</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="+1 (847) 222 4444"
          v-model="phoneNumber"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Legal Name Of Business</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Hometown Industries LLC"
          v-model="businessLegalName"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">EIN</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="93 8383838 3820202 20002"
          v-model="ein"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Corporate Address</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="1234 hollywood blvd"
          v-model="corporateAddress"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">State Of Incorporation</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="New Mexico"
          v-model="stateOfIncorporation"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Date Of Incorporation</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="12/24/1998"
          v-model="dateOfIncorporation"
        />
      </div>
      <hr class="mb-4" />
      <button class="btn btn-primary btn-lg" @click="submit">Submit</button>
    </form>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      ein: '',
      corporateAddress: '',
      stateOfIncorporation: '',
      dateOfIncorporation: '',
      businessLegalName: ''
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('createContact', this.payload)
      this.$router.push('/submission-confirmed')
    }
  },
  computed: {
    payload() {
      return {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        ein: this.ein,
        corporateAddress: this.corporateAddress,
        stateOfIncorporation: this.stateOfIncorporation,
        dateOfIncorporation: this.dateOfIncorporation,
        businessLegalName: this.businessLegalName
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