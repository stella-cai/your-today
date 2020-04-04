const mongoose = require('mongoose')

const FrozenAccountSchema = new mongoose.Schema({
    account_id: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required:true
    },
    reason: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const FrozenAccount = mongoose.model('FrozenAccount', FrozenAccountSchema)

module.exports = { FrozenAccount }