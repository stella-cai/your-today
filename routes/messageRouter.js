'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const messageRouter = express.Router()
var session = require('express-session')

messageRouter.use(express.static(__dirname + '/pub'))
messageRouter.use(bodyParser.urlencoded({
    extended: true
}))

messageRouter.use(bodyParser.json())
messageRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const { ObjectID } = require('mongodb')
const mongoose = require('../mongoose.js')
const { Message } = require('./../models/message')

// Route to GET all messages sent to a user
messageRouter.get('/', (req, res) => {
    const username = req.session.user.username
    
    Message.find({ to: username }).sort('-date').then((messages) => {
        res.send({ messages })
    }).catch((err) => {
        res.status(500).send()
    })
})

// Route to DELETE a message by its id
messageRouter.delete('/:id', (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return
    }

    Message.findByIdAndDelete(id).then((deleted) => {
        if (!deleted) {
            res.status(404).send()
        } else {
            res.send(deleted)
        }
    })
})

module.exports = messageRouter