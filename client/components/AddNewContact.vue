<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-sm mx-auto">
      <div class="w-full bg-white shadow-md mt-5 rounded-sm p-12">
        <h2 class="text-center text-gold mb-6">Add Contact</h2>
        <input
          class="w-full text-xs focus:outline-none bg-brown-lightest p-5 text-brown mb-3"
          name="name"
          placeholder="name"
          v-model="name"
        />
        <input
          class="w-full text-xs focus:outline-none bg-brown-lightest p-5 text-brown mb-3"
          name="phoneNumber"
          placeholder="phone number"
          v-model="phoneNumber"
        />
        <button
          class="w-full mt-3 text-sm py-5 text-white rounded-sm bg-emerald focus:outline-none hover:bg-emerald-light"
          @click="addNewContact"
        >Add Contact</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phoneNumber: ''
    }
  },
  methods: {
    addNewContact() {
      this.$store.dispatch('newContact', {
        name: this.name,
        phoneNumber: this.phoneNumber
      })
    }
  }
}
</script>

<style>
</style>