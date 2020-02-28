'use strict'

/**
 * Submit button
 */

const registerFormSubmit = document.querySelector("#register-form-submit");
registerFormSubmit.addEventListener("click", submit);

function submit(e){
    e.preventDefault();
    console.log("pressed the submit button!");

    if (checkPassword()){
        console.log("registration success")
        const successAlert = document.createElement("div");
        successAlert.setAttribute("class", "alert alert-success");
        successAlert.setAttribute("role", "alert");
        successAlert.appendChild(document.createTextNode("Registration success! Redirecting you to the login page..."));
        const alerts = document.querySelector("#form-alerts");
        if (alerts.lastElementChild){
            alerts.removeChild(alerts.lastElementChild);
        }
        alerts.appendChild(successAlert);
        setTimeout(redirect, 2500);
    }
    else{
        const failureAlert = document.createElement("div");
        failureAlert.setAttribute("class", "alert alert-danger");
        failureAlert.setAttribute("role", "alert");
        failureAlert.appendChild(document.createTextNode("Error! Passwords must match!"));
        const alerts = document.querySelector("#form-alerts");
        if (alerts.lastElementChild){
            alerts.removeChild(alerts.lastElementChild);
        }
        alerts.appendChild(failureAlert);
    }
}

function checkPassword(){
    const registerFormPassword = document.querySelector("#register-form-password");
    const registerFormVerifyPassword = document.querySelector("#register-form-verify-password");

    console.log(registerFormPassword.value);
    console.log(registerFormVerifyPassword.value);

    if (registerFormPassword.value === registerFormVerifyPassword.value){
        return true;
    }
}

function redirect(){
    console.log("redirecting");
    window.location = "login.html";
}

/**
 * Toggle Passwords with a checkbox
 */

const passwordToggle = document.querySelector("#passwordToggle");
passwordToggle.addEventListener("click", togglePasswordText);

function togglePasswordText(e){
    console.log("toggling password text")
    const registerFormPassword = document.querySelector("#register-form-password");
    const registerFormVerifyPassword = document.querySelector("#register-form-verify-password");

    if (passwordToggle.checked === true) {
        registerFormPassword.setAttribute("type", "text");
        registerFormVerifyPassword.setAttribute("type", "text");
    }
    else if (passwordToggle.checked === false){
        registerFormPassword.setAttribute("type", "password");
        registerFormVerifyPassword.setAttribute("type", "password");
    }
}