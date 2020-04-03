'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const frozenAccountRouter = express.Router()
var session = require('express-session')

frozenAccountRouter.use(express.static(__dirname + '/pub'))
frozenAccountRouter.use(bodyParser.urlencoded({
    extended: true
}))

frozenAccountRouter.use(bodyParser.json())
frozenAccountRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const { ObjectID } = require('mongodb')
const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')

// Route to freeze an account
frozenAccountRouter.patch('/freeze/:id', (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }

    User.findByIdAndUpdate(
        id,
        { status: 1},
        { new: true}
    ).then((user) => {
        if (!user) {
            res.status(404).send()
        } else {
            res.send(user)
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Route to unfreeze an account
frozenAccountRouter.patch('/unfreeze/:id', (req, res) => {
    const id = req.params.id

    if(!ObjectID.isValid(id)) {
        res.status(400).send()
    }

    User.findByIdAndUpdate(
        id,
        { status: 0},
        { new: true}
    ).then((user) => {
        if (!user) {
            res.status(404).send()
        } else {
            res.send(user)
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Route to get all frozen accounts
frozenAccountRouter.get('/frozen', (req, res) => {
    User.find({ status: 1} ).then((users) => {
        res.send({ users })
    }).catch((err) => {
        res.status(500).send(err)
    })
}) 

// Route to get all active accounts
frozenAccountRouter.get('/active', (req, res) => {
    User.find({ status: 0} ).then((users) => {
        res.send({ users })
    }).catch((err) => {
        res.status(500).send(err)
    })
})