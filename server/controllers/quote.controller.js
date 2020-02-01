import config from '../config'
const client = require('twilio')(config.twilioSid, config.twilioAuthToken);

const sendQuoteToContacts = (req, res) => {
  try {
    client.messages
      .create(
        {
          body: req.body.body,
          from: req.body.from,
          to: req.body.to
        })
      .then(message => res.json(message));

  } catch (err) {
    console.error(err)
  }
}

export default {
  sendQuoteToContacts,
}