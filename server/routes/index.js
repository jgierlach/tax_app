import { Router } from 'express'
import authMiddleware from '@middleware/auth'
import loginValidator from '@validators/login'
import registerValidator from '@validators/register'
import authController from '@controllers/auth.controller'
import contactsController from "@controllers/contacts.controller"
import emailConfirmValidator from '@validators/email-confirm'
import resetPasswordValidator from '@validators/reset-password'
import forgotPasswordValidator from '@validators/forgot-password'
import quoteController from '@controllers/quote.controller.js'

const router = new Router()

router.get('/api/v1/', async (req, res) => {
  res.send("Service is up")
})

router.post('/api/v1/auth/login', loginValidator, authController.login)

router.post('/api/v1/auth/register', registerValidator, authController.register)

router.post(
  '/api/v1/auth/passwords/email',
  forgotPasswordValidator,
  authController.forgotPassword
)

router.post(
  '/api/v1/auth/passwords/reset',
  resetPasswordValidator,
  authController.resetPassword
)

router.post(
  '/api/v1/auth/emails/confirm',
  emailConfirmValidator,
  authController.confirmEmail
)

router.post(
  '/api/v1/auth/emails/resend',
  authMiddleware,
  authController.resendConfirmEmail
)

router.get('/api/v1/contacts', authMiddleware, contactsController.fetchAllContacts)

router.post('/api/v1/contacts/delete', authMiddleware, contactsController.deleteContact)

router.post('/api/v1/contacts/new', contactsController.newContact)

router.post('/api/v1/contacts/add', contactsController.addContact)

router.post('/api/v1/quotes/send', quoteController.sendQuoteToContacts)

export default router
