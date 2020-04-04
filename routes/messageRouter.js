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

// Route to POST a new message
// expected request body:
// {
//      receiver:...,
//      subject:...,
//      content:...,
// }
// NOTE: receiver is username of the receiving user
messageRouter.post('/', (req, res) => {
    if (!req.body.receiver || !req.body.subject || !req.body.content) {
        res.status(400).send()
    }

    const message = new Message({
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject: req.body.subject,
        content: req.body.content,
        date: new Date()
    })

    message.sage().then((message) => {
        res.send(message)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// Route to GET all messages sent to a user
messageRouter.get('/', (req, res) => {
    const receiver = req.session.user.username
    
    Message.find({ username: receiver }).sort('-date').then((messages) => {
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