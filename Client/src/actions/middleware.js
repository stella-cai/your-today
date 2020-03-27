function setUserWallpaper(wallpaperUrl) {
    const url = "/set-wallpaper";
    const date = {"wallpaper": wallpaperUrl}
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(date),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(function (res) {
            if(res.status === 200) {
                return("success")
            }
            else {
                return("something is wrong. check your username / password")
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function checkLoggedin(app) {
    const url = "/credential/check-loggedin";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
}

function userRegister(user){
    const url = "/credential/user-register";
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
    const data = {username: username, password: password}
    const url = "/credential/auth";
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(function (res) {
            if(res.status === 200) {
                return("success")
            }
            else {
                return("something is wrong. check your username / password")
            }
        })
        .catch(error => {
            console.log(error);
        })
}


function setUserMood(mood) {
    const url = "/set-mood";
    const data = {"mood": mood}
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(function (res) {
            if(res.status === 200) {
                return("success")
            }
            else {
                return("something is wrong. check your username / password")
            }
        })
        .catch(error => {
            console.log(error);
        })
}

export const Middleware = {
    userRegister,
    login,
    checkLoggedin,
    setUserWallpaper,
    setUserMood
}