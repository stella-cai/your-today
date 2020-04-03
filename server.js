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

const credentialRouter = require('./routes/credentialsRouter')
app.use('/credential', credentialRouter)

const todoRouter = require('./routes/todoRouter')
app.use('/todo', todoRouter)

const linkRouter = require('./routes/linkRouter')
app.use('/link', linkRouter)

const settingsRouter = require('./routes/settingsRouter')
app.use('/settings', settingsRouter)

const feedbackRouter = require('./routes/feedbackRouter')
app.use('/feedback', feedbackRouter)

const frozenAccountRouter = require('./routes/frozenAccountRouter')
app.use('/account', frozenAccountRouter)

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
