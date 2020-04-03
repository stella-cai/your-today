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

const credentialRouter = require('./routes/credentials')
app.use('/credential', credentialRouter)

const todoRouter = require('./routes/todo.js')
app.use('/todo', todoRouter)

app.post('/set-wallpaper', (req, res) => {
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

app.post('/set-mood', (req, res) => {
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
