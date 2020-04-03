/* Phase 2 API */
'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const credentialsRouter = express.Router()
var session = require('express-session')

credentialsRouter.use(express.static(__dirname + '/pub'))
credentialsRouter.use(bodyParser.urlencoded({
    extended: true
}))


credentialsRouter.use(bodyParser.json())
credentialsRouter.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')
const Bcrypt = require("bcryptjs")

credentialsRouter.get("/check-loggedin", (req, res) => {
    if (req.session.loggedin) {
        res.send({ currentUser: req.session.user });
    } else {
        res.status(401).send();
    }
});

credentialsRouter.post('/user-register', (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: Bcrypt.hashSync(req.body.password, 10),
        fisrtname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        securityQuestions: req.body.securityQuestions

    })

	user.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

credentialsRouter.post('/auth', (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) return console.error(err)
        
        if (user === null) {
            // res.send("The Username doesn't exist!")
            res.status(400).send("wrong username")
        }
        else if (!Bcrypt.compareSync(req.body.password, user.password)) {
            res.status(400).send("wrong passwordsss")
        }
        else {
            req.session.loggedin = true
            req.session.user = user
            res.status(200).send("success")
        }
    })
})

module.exports = credentialsRouter