import User from '@models/User'
import Contact from '@models/Contact'

const newContact = async (req, res) => {
  try {
    console.log("New Contacts controller fired")
    const { name, phoneNumber, ein, corporateAddress, email, stateOfIncorporation, dateOfIncorporation } = req.body
    if (!name) {
      throw new Error("name is required")
    }
    if (!phoneNumber) {
      throw new Error("phone number is required")
    }
    if (!ein) {
      throw new Error("EIN is required")
    }
    if (!corporateAddress) {
      throw new Error("Corporate Address is required")
    }
    if (!email) {
      throw new Error("email is required")
    }
    if (!stateOfIncorporation) {
      throw new Error("State Of Incorporation is required")
    }
    if (!dateOfIncorporation) {
      throw new Error("Date Of Incorporation is required")
    }
    const contact = await Contact.create({ name, phoneNumber, email, ein, corporateAddress, stateOfIncorporation, dateOfIncorporation })
    return res.json(contact)
  } catch (err) {
    console.error(err)
  }
}

// Business legal name
// EIN
// Corporate Address
// Contact Name
// Phone number
// Email
// State of Incorporation
// Date of Incorporation

const addContact = async (req, res) => {
  // assumptinos
  // 1. the user doc exists
  // 2. the contact doc exists
  try {
    console.log("add Contact controller fired")
    const id = req.user.id // id
    const update = { $addToSet: { contacts: [req.body.contactId] } }
    const options = { new: true }
    const updatedUser = await User.findByIdAndUpdate(id, update, options)
    return res.json(updatedUser)
  } catch (err) {
    console.error(err)
  }
}

const fetchAllContacts = async (req, res) => {
  try {
    // const user = await User.findById(req.user.id).populate('contacts')
    // const contacts = user.contacts
    const contacts = await Contact.find({})
    console.log('contacts', contacts)
    return res.status(201).json(contacts)
  } catch (err) {
    console.error(err)
  }
}

const deleteContact = async (req, res) => {
  console.log('Deleting Contact!!')
  try {
    const contactId = req.body.contactId
    console.log({ contactId })
    const user = await User.findByIdAndUpdate(
      req.user.id, // id
      { $pullAll: { contacts: [contactId] } }, // update
      { new: true, useFindAndModify: false } // options
    )
    console.log({ user })
    await Contact.findByIdAndDelete(contactId)
    console.log(user.contacts.includes(contactId), user.contacts)
    res.json(user.contacts)
  } catch (err) {
    console.error(err)
  }
}

export default {
  addContact,
  fetchAllContacts,
  newContact,
  deleteContact
}
