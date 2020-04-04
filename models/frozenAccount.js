const mongoose = require('mongoose')

const FrozenAccountSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
})

const FrozenAccount = mongoose.model('FrozenAccount', FrozenAccountSchema)

module.exports = { FrozenAccount }