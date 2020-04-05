'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const musicRouter = express.Router()
var session = require('express-session')

musicRouter.use(express.static(__dirname + '/pub'))
musicRouter.use(bodyParser.urlencoded({
    extended: true
}))

musicRouter.use(bodyParser.json())
musicRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const { ObjectID } = require('mongodb')
const { User } = require('../models/user')

// Route for adding a new link
// expected request form:
// { url: https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM}
musicRouter.post('/', (req, res) => {
    if (!req.body.url) {
        res.status(400).send()
    }

    User.findOneAndUpdate(
        { username: req.session.user.username },
        { $set: { playlist: req.body.url } },
        { new: true }
    ).then((user) => {
        if (!user) {
            res.status(404).send() // could not find user
        } else {
            req.session.user.playlist = req.body.url
            res.send(req.session.user)
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

module.exports = musicRouter