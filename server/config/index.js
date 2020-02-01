import dotenv from 'dotenv'

dotenv.config()

export default {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017',
  url: process.env.APP_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET || '1234',
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || 'bibbity bop',
  twilioSid: process.env.TWILIO_SID || 'beeb boop'
}
