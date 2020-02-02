<template>
  <div class="container">
    <div class="bg-white shadow p-4 mt-5">
      <h2 class="text-center text-gold">Login</h2>
      <div class="w-full bg-white">
        <text-input
          name="email"
          :value="model.email"
          v-model="model.email"
          v-validate="'required|email'"
          placeholder="Enter your email"
          :error="errors.first('email')"
        />
        <text-input
          type="password"
          name="password"
          :value="model.password"
          v-model="model.password"
          v-validate="'required|min:6'"
          :error="errors.first('password')"
          placeholder="Enter your password"
        />
        <div class="my-8 flex justify-center items-center">
          <router-link to="/auth/passwords/email" class="no-underline text-brown">Forgot Password ?</router-link>
        </div>
        <btn
          class="btn btn-primary mt-2"
          label="Sign in"
          :disabled="loading"
          :loading="loading"
          @click="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from '@client/mixins/form'
import { POST_LOGIN } from '@store/auth/actions'

export default {
  mixins: [formMixin],
  data: () => ({
    model: {
      email: '',
      password: ''
    }
  }),

  methods: {
    login() {
      this.$validator.validate().then(isValid => {
        if (!isValid) {
          return
        }

        this.toggleLoading()

        this.$store
          .dispatch(POST_LOGIN, this.model)
          .then(response => {
            this.toggleLoading()

            this.flash('Sign in successful.')

            this.setAuth(response.data)
            this.$router.push('/companies')
          })
          .catch(error => {
            this.toggleLoading()

            // error.response.data => { email: 'This user already exists' }
            // => ['email']
            // this.errors.add({ field: 'email', msg: 'This user already exists' })
            Object.keys(error.response.data).forEach(field => {
              this.errors.add({
                field,
                msg: error.response.data[field]
              })
            })
          })
      })
    }
  }
}
</script>
