const mongoose = require('mongoose')
 
const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  }

})
 
const Message = mongoose.model('Message', MessageSchema)

module.exports = { Message }
