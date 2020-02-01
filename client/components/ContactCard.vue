<template>
  <transition name="fade" appear>
    <div
      class="bg-white text-gray-600 shadow-md border-t-4 border-blue-600 rounded mt-4 p-3 px-5 text-left justify-center items-center"
    >
      <h3>Name: {{contact.name}}</h3>
      <h3>Phone Number: {{contact.phoneNumber}}</h3>
      <button
        class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
        @click="removeContactFromSendList(contact)"
      >Remove From Send List</button>
      <button
        class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
        @click="deleteContact(contact)"
      >DELETE CONTACT</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['contact'],
  methods: {
    // addToContactSendList(contact) {
    //   this.$store.commit('addToContactSendList', contact)
    // },
    removeContactFromSendList(contact) {
      this.$store.commit('removeContactFromSendList', contact)
    },
    deleteContact(contact) {
      this.$store.dispatch('deleteContact', contact)
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>