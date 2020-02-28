'use strict'
const registerFormSubmit = document.querySelector("#register-form-submit");
registerFormSubmit.addEventListener("click", submit);

function submit(e){
    e.preventDefault();
    console.log("pressed the submit button!");

    const registerFormPassword = document.querySelector("#register-form-password");
    const registerFormVerifyPassword = document.querySelector("#register-form-verify-password");

    console.log(registerFormPassword.value);
    console.log(registerFormVerifyPassword.value);

    if (registerFormPassword.value === registerFormVerifyPassword.value){
        console.log("registration success")
    }
}