'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const linkRouter = express.Router()
var session = require('express-session')

linkRouter.use(express.static(__dirname + '/pub'))
linkRouter.use(bodyParser.urlencoded({
    extended: true
}))

linkRouter.use(bodyParser.json())
linkRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const { ObjectID } = require('mongodb')
const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')

// Route for adding a new link
// expected request form:
// { url: www.google.com, displayName: google }
linkRouter.post('/', (req, res) => {
    if (!req.body.url || !req.body.displayName) {
        res.status(400).send()
    }

    const link = {
        url: req.body.url,
        displayName: req.body.displayName
    }

    User.findOneAndUpdate(
        { username: req.session.user.username },
        { $push: { linkList: link } },
        { new: true }
    ).then((user) => {
        if (!user) {
            res.status(404).send() // could not find user
        } else {
            const addedLink = user.linkList[user.linkList.length - 1]
            req.session.user.linkList.push(addedLink)
            res.send({ addedLink })
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Route for getting all links
linkRouter.get('/', (req, res) => {
    User.find({ username: req.session.user.username }).then((user) => {
        if (!user) {
            res.status(404).send() // could not find user
        } else {
            res.send(user.linkList)
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Route for deleting a link
linkRouter.delete('/:id', (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
        res.status(404).send()
    }

    User.find({ username: req.session.user.username }).then((user) => {
        if (!user) {
            res.status(404).send()
        } else {
            const deletedLink = user.linkList.find((link) => {
                link._id.toString() === id
            })
            if (!deletedLink) {
                res.status(404).send()
            } else {
                const updatedLink = user.linkList.filter((link) =>
                    link._id.toString() !== id
                )
                User.findOneAndUpdate(
                    { username: req.session.user.username },
                    { linkList: updatedLink },
                    { new: true }
                ).then(() => {
                    req.session.user.linkList = updatedLink
                    res.send({ deletedTodo })
                })
            }
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

module.exports = linkRouter