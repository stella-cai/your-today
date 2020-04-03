'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const settingsRouter = express.Router()
var session = require('express-session')

settingsRouter.use(express.static(__dirname + '/pub'))
settingsRouter.use(bodyParser.urlencoded({
    extended: true
}))

settingsRouter.use(bodyParser.json())
settingsRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')

settingsRouter.post('/set-wallpaper', (req, res) => {
    User.findOneAndUpdate(
        { 'username': req.session.user.username},
        { 'wallpaper': req.body.wallpaper }, 
        function (err, user) {
            if (err) throw err
            req.session.user.wallpaper = req.body.wallpaper
            res.status(200).send("success")
        }
    )
})

settingsRouter.post('/set-mood', (req, res) => {
    User.findOneAndUpdate(
        { 'username': req.session.user.username},
        { 'mood': req.body.mood }, 
        function (err, user) {
            if (err) throw err
            req.session.user.mood = req.body.mood
            res.status(200).send("success")
        }
    )
})

module.exports = settingsRouter