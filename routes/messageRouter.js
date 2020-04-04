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
//      to:...,
//      subject:...,
//      content:...,
// }
// NOTE: to is username of the receiving user
messageRouter.post('/', (req, res) => {
    if (!req.body.to || !req.body.subject || !req.body.content) {
        res.status(400).send()
    }

    const message = new Message({
        sender: req.body.sender,
        to: req.body.to,
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