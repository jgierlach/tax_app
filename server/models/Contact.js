import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  businessLegalName: String,
  ein: String,
  corporateAddress: String,
  stateOfIncorporation: String,
  dateOfIncorporation: String
})

export default mongoose.model('Contact', ContactSchema)
