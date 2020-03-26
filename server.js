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

const mongoose = require('./mongoose.js')
const schemas = require('./schemas.js')
const UserSchema = schemas.UserSchema
const User = mongoose.model('user', UserSchema, 'user')
const Bcrypt = require("bcryptjs")

app.post('/user-register', (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: Bcrypt.hashSync(req.body.password, 10),
        fisrtname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        securityQuestions:req.body.securityQuestions

    })

	user.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/Client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/Client/build/index.html");
});

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
