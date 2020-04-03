const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    read: {
        type: Number,
        required: true,
        default: 0 // 0 for unread, 1 for read
    }
})

const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = { Feedback }