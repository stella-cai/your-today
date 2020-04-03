'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const todoRouter = express.Router()
var session = require('express-session')

todoRouter.use(express.static(__dirname + '/pub'))
todoRouter.use(bodyParser.urlencoded({
    extended: true
}))

todoRouter.use(bodyParser.json())
todoRouter.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

const { ObjectID } = require('mongodb')
const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')

// Route for adding a new todo item
// expected request form:
// { what: ..., when: ... }
todoRouter.post('/', (req, res) => {
    if (!req.body.what || !req.body.when) {
        res.status(400).send()
        return
    }

    const todo = {
        what: req.body.what,
        when: req.body.when
    }

    User.findOneAndUpdate(
        { username: req.session.user.username },
        { $push: { todoList: todo } },
        { new: true }
    ).then((user) => {
        if (!user) {
            res.status(404).send() // could not find user
        } else {
            const addedTodo = user.todoList[user.todoList.length - 1]
            req.session.user.todoList.push(addedTodo)
            res.send({ addedTodo })
        }
    }).catch((err) => {
        res.status(500).send(err) // server error
    })
})

// Route for getting all todo items
todoRouter.get('/', (req, res) => {
    User.find({ username: req.session.user.username }).then((user) => {
        if (!user) {
            res.status(404).send() // could not find user
        } else {
            res.send(user.todoList)
        }
    }).catch((err) => {
        res.status(500).send(err)
    })

})

// Route for deleting a todo item
// Returns the todoItem deleted
todoRouter.delete('/:id', (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
        res.status(404).send() // invalid id, definitely can't find resource, 404
        return
    }

    User.findOne({ username: req.session.user.username }).then((user) => {
        if (!user) {
            res.status(404).send() // could not find this restaurant
        } else {
            const deletedItem = user.todoList.find((todo) =>
                todo._id.toString() === id
            )
            if (!deletedItem) {
                res.status(404).send() // could not find this reservation
            } else {
                const updatedTodo = user.todoList.filter((todo) =>
                    todo._id.toString() !== id
                )
                User.findOneAndUpdate(
                    { username: req.session.user.username },
                    { todoList: updatedTodo },
                    { new: true }
                ).then(() => {
                    req.session.user.todoList = updatedTodo
                    res.send({ deletedItem })
                })
            }
        }
    }).catch((err) => {
        res.status(500).send(err)
    })
})

module.exports = todoRouter