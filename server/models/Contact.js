import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  businessLegalName: String,
  ein: String,
  corporateAddress: String,
  stateOfIncorporation: String,
  dateOfIncorporation: String,
  businessLegalName: String
})

export default mongoose.model('Contact', ContactSchema)

// Business legal name
// EIN
// Corporate Address
// Contact Name
// Phone number
// Email
// State of Incorporation
// Date of Incorporation
