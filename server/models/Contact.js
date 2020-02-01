import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String
})

export default mongoose.model('Contact', ContactSchema)
