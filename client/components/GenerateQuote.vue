<template>
  <div class="background">
    <transition name="fade" appear>
      <div class>
        <div class="mt-4">
          <h1 class="text-center">"{{selectedQuoteText}}"</h1>
        </div>
        <div class="mt-4" v-if="showAuthor">
          <h3 class="text-center">- {{selectedQuoteAuthor}}</h3>
        </div>
      </div>
    </transition>

    <div class="mt-4 text-center">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded text-center"
        @click="generateQuote"
      >Find A Quote</button>
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded text-center"
        @click="sendQuote"
      >Send Quote</button>
    </div>
  </div>
</template>

<script>
import { quoteData } from '../utils/dummyData.js'

export default {
  data() {
    return {
      showAuthor: false
    }
  },
  computed: {
    selectedQuoteText() {
      return this.$store.state.selectedQuoteText
    },
    selectedQuoteAuthor() {
      return this.$store.state.selectedQuoteAuthor
    }
  },
  methods: {
    generateQuote() {
      this.showAuthor = true
      const quotes = quoteData()
      const quote = quotes[Math.floor(Math.random() * 30)]
      this.$store.dispatch('updateSelectedQuoteTextAndAuthor', quote)
    },
    sendQuote() {
      const contacts = this.$store.state.contactSendList
      for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i])
        this.$store.dispatch('sendQuoteToContacts', contacts[i])
      }
      this.flash('Your Quote Has Been Sent!')
    }
  }
}
</script>

<style scoped>
.background {
  background: white;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1.5rem;
  border-radius: 15px;
}
</style>