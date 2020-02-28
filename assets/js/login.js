'use strict'

const loginSubmit = document.querySelector('#login-button')
loginSubmit.addEventListener("click", login)

function login(e) {
    e.preventDefault()
    console.log('pressed the login button!')

    if(checkPassword()) {
        console.log('login success')
        redirect()
    } else {
        console.log('login failed')
    }
}

function checkPassword() {
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value

    console.log(username)
    console.log(password)

    if(username == 'user' && password == 'user') {
        return true
    }
    return false
}

function redirect(){
    console.log("redirecting");
    window.location = "index.html";
}
