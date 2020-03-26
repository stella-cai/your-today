const mongoose = require('mongoose')
 

const SecurityQuestionsSchema = new mongoose.Schema({
  question: {
    type: String
  },
  
  answer: {
    type: String,
    required: true
  }

})
 
const TodoListSchema = new mongoose.Schema({
  what: {
    type: String
  },

  when: {
    type: Date,
    required: true
  }

})
 
const LinkSchema = new mongoose.Schema({
  url: {
    type: String
  },

  displayName: {
    type: String,
    required: true
  }
    
})

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true  
  },

  password: {
    type: String,
    required: true
  },

  fisrtname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  birthday: {
    type: Date,
    required: true
  },

  mood: {
    type: Number,
    default: 0
  },

  status: {
    type: Number,
    required: true,
    default: 0 //(0: active, 1: banned)
  },

  wallpaper: {
    type: String,
    default: "afasfasf"
  },

  securityQuestions: [SecurityQuestionsSchema],

  todoList: [TodoListSchema],

  linkList: [LinkSchema],

})
 
module.exports = {
  UserSchema: UserSchema
}
