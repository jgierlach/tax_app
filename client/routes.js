import Router from 'vue-router'
import Home from '@pages/Home.vue'
import Login from '@pages/Login.vue'
import Register from '@pages/Register.vue'
import EmailConfirm from '@pages/EmailConfirm.vue'
import ResetPassword from '@pages/ResetPassword.vue'
import ForgotPassword from '@pages/ForgotPassword.vue'
import SubmissionConfirmed from './pages/SubmissionConfirmed.vue'
import Companies from './pages/Companies.vue'
import CompanyDetails from './pages/CompanyDetails.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/submission-confirmed',
      component: SubmissionConfirmed
    },
    {
      path: '/companies',
      component: Companies
    },
    {
      path: '/companies/:id',
      component: CompanyDetails
    },
    {
      path: '/auth/passwords/email',
      component: ForgotPassword
    },
    {
      path: '/auth/passwords/reset/:token',
      component: ResetPassword
    },
    {
      path: '/auth/emails/confirm/:token',
      component: EmailConfirm
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})
