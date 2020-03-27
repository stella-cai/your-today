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
const TodoListSchema = schemas.TodoListSchema
const User = mongoose.model('user', UserSchema, 'user')
const TodoList = mongoose.model('todolist', TodoListSchema, 'todolist')
const Bcrypt = require("bcryptjs")

// expected request form:
// { what: ..., when: ... }
app.patch('add-todo', (req, res) => {
    const todo = new TodoList({
        what: req.body.what,
        when: req.body.when
    })
    try {
        User.findOneAndUpdate(
            { 'username': req.session.user.username },
            { $push : {'todoList': todo}}
        )
        res.status(200).send("success")
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})