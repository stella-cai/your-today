'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const feedbackRouter = express.Router()
var session = require('express-session')

feedbackRouter.use(express.static(__dirname + '/pub'))
feedbackRouter.use(bodyParser.urlencoded({
    extended: true
}))

feedbackRouter.use(bodyParser.json())
feedbackRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const mongoose = require('../mongoose.js')
const { Feedback } = require('./../models/feedback')

// Route to post a new feedback
feedbackRouter.post('/', (req, res) => {
    if(!req.body.id || !req.body.reason) {
        res.status(400).send()
    }

    const feedback = new Feedback({
        id: req.body.id,
        reason: req.body.reason
    })

    feedback.save().then((feedback) => {
        res.send(feedback)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// Route to get all feedbacks
feedbackRouter.get('/', (req, res) => {
    Feedback.find().then((feedbacks) => {
        res.send({ feedbacks })
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Route for marking a feedback as read
feedbackRouter.patch('/:id', (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return
    }

    Feedback.findOneAndUpdate(
        id,
        { read: 1 },
        { new: true }
    ).then((feedback) => {
        res.send(feedback)
    })
})