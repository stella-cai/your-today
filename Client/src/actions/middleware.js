function userRegister(user){
    const url = "/user-register";
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                return ("success")
            } else {
                return ("fail")
                // if username exists, tell the user.
                // if email exists, tell the user
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function login(username, password) {
    let result = 0
    const data = {username: username, password: password}
    const url = "/auth";
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request)
        .then(function (res) {
            if(res.status == 200) {
                result = 1
            }
        })
        .catch(error => {
            console.log(error);
        })
    if(result == 1) {
        return "success"
    }
    else {
        return "fail"
    }
}

export const Middleware = {
    userRegister,
    login,
}