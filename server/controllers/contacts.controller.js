import User from '@models/User'
import Contact from '@models/Contact'

const newContact = async (req, res) => {
  try {
    const { name, phoneNumber, ein, corporateAddress, email, stateOfIncorporation, dateOfIncorporation, businessLegalName } = req.body
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
    if (!businessLegalName) {
      throw new Error("Business Legal Name is required")
    }
    const contact = await Contact.create({ name, phoneNumber, email, ein, corporateAddress, stateOfIncorporation, dateOfIncorporation, businessLegalName })
    return res.json(contact)
  } catch (err) {
    console.error(err)
  }
}

const fetchAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({})
    return res.status(201).json(contacts)
  } catch (err) {
    console.error(err)
  }
}

const fetchSingleContact = async (req, res) => {
  try {
    const id = req.params.id
    console.log('id', id)
    const contact = await Contact.findById(id)
    console.log('contact', contact)
    return res.json(contact)
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
  fetchAllContacts,
  fetchSingleContact,
  newContact,
  deleteContact
}
