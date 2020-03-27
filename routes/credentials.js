/* Phase 2 API */
'use strict'
const log = console.log
log('Express server')
var bodyParser = require('body-parser')
const express = require('express')

const app = express()
var session = require('express-session')

app.use(express.static(__dirname + '/pub'))
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(bodyParser.json())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

const mongoose = require('../mongoose.js')
const schemas = require('../schemas.js')
const UserSchema = schemas.UserSchema
const User = mongoose.model('user', UserSchema, 'user')
const Bcrypt = require("bcryptjs")



app.get("/check-loggedin", (req, res) => {
    if (req.session.loggedin) {
        res.send({ currentUser: req.session.user });
    } else {
        res.status(401).send();
    }
});

app.post('/user-register', (req, res) => {
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

app.post('/auth', (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) return console.error(err)
        
        if (user === null) {
            res.send("The Username doesn't exist!")
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

module.exports = app