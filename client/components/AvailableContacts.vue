<template>
  <div class="mt-4 text-center">
    <h1>Available Contacts</h1>
    <select>
      <option
        @click="addToContactSendList(contact)"
        v-for="contact in contacts"
        :key="contact._id"
      >{{contact.name}}</option>
    </select>

    <div class="mt-4 text-center">
      <ContactCard v-for="contact in contactSendList" :key="contact._id" :contact="contact" />
    </div>
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue'

export default {
  mounted() {
    this.$store.dispatch('fetchContacts')
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
    contactSendList() {
      return this.$store.state.contactSendList
    }
  },
  methods: {
    addToContactSendList(contact) {
      this.$store.commit('addToContactSendList', contact)
    }
  },
  components: {
    ContactCard
  }
}
</script>

<style>
</style>