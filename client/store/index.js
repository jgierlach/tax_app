import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import flash from './flash'
import axios from 'axios'
import headers from '../utils/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    flash
  },
  state: {
    companies: [],
    selectedCompany: {}
  },
  actions: {
    async createContact({ state, dispatch }, contact) {
      await axios.post('/api/v1/contacts/new', contact)
    },
    async fetchContacts({ state }) {
      try {
        const response = await axios.get('/api/v1/contacts', headers)
        state.companies = response.data
      } catch (err) {
        console.error(err)
      }
    },
    async fetchSingleContact({ state, commit }, contactId) {
      try {
        const response = await axios.get(`/api/v1/contacts/${contactId}`, headers)
        commit("updateSelectedCompany", response.data)
      } catch (err) {
        console.error(err)
      }
    },
    async deleteContact({ dispatch, commit }, contact) {
      await axios.post('/api/v1/contacts/delete', { 'contactId': contact._id }, headers)
      commit('removeContactFromSendList', contact)
      dispatch('fetchContacts')
    },
    updateSelectedQuoteTextAndAuthor({ commit }, quote) {
      commit("updateSelectedQuoteText", quote)
      commit("updateSelectedQuoteAuthor", quote)
    },
    async sendQuoteToContacts({ state }, contact) {
      await axios.post('/api/v1/quotes/send', { to: contact.phoneNumber, from: '+18632690689', body: `Some inspiration from ${state.auth.user.name} \n ${state.selectedQuoteText} \n -${state.selectedQuoteAuthor}` }, headers)
    }
  },
  mutations: {
    addToContactSendList(state, payload) {
      state.contactSendList.push(payload)
    },
    removeContactFromSendList(state, payload) {
      state.contactSendList.splice(state.contactSendList.findIndex(contact => contact.name === payload.name), 1);
    },
    resetContactsFromSendList(state, payload) {
      state.contactSendList = []
    },
    updateSelectedCompany(state, payload) {
      state.selectedCompany = payload
    }
  }
})
