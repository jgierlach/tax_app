import User from '@models/User'
import Contact from '@models/Contact'

const newContact = async (req, res) => {
  try {
    const { name, phoneNumber } = req.body
    if (!name) {
      throw new Error("name is required")
    }
    if (!phoneNumber) {
      throw new Error("phone number is required")
    }
    const contact = await Contact.create({ name, phoneNumber })
    return res.json(contact)
  } catch (err) {
    console.error(err)
  }
}

const addContact = async (req, res) => {
  // assumptinos
  // 1. the user doc exists
  // 2. the contact doc exists
  try {
    const id = req.user.id // id
    const update = { $addToSet: { contacts: [req.body.contactId] } }
    const options = { new: true }
    const updatedUser = await User.findByIdAndUpdate(id, update, options)
    return res.json(updatedUser)
  } catch (err) {
    console.error(err)
  }
}

const displayAllContacts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('contacts')
    const contacts = user.contacts
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
  displayAllContacts,
  newContact,
  deleteContact
}
