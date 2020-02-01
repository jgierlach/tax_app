<template>
  <div class="container">
    <h1 class="text-center">Contacts</h1>
    <ContactCard v-for="contact in contacts" :key="contact.id" :contact="contact" />
    <div class="border-t-4 border-red-600 rounded mt-4 p-3 px-5"></div>
    <AddNewContact />
  </div>
</template>

<script>
import axios from 'axios'
import ContactCard from '../components/ContactCard.vue'
import AddNewContact from '../components/AddNewContact.vue'

export default {
  async mounted() {
    this.$store.dispatch('fetchContacts')
  },
  data() {
    return {}
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
    contactSendList() {
      return this.$store.state.contactSendList
    }
  },
  components: {
    ContactCard,
    AddNewContact
  }
}
</script>