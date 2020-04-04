async function getFrozenUsers() {
    const url = "/account/frozen";

    return fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });
}

async function getActiveUsers() {
    const url = "/account/active";

    return fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });    
}

async function freezeUser(id, reason){
    const url = "/account/freeze";
    const data = {"id": id,
                  "reason": reason}
    console.log(JSON.stringify(data))
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                return json
            }
        })
        .catch(error => {
            console.log(error);
    })
}


function completeTodo(todoId) {
    const url = "/todo/" + todoId;
    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return "success";
            }
        })
        .catch(error => {
            console.log(error);
        })
}


function addTodo(todo) {
    const url = "/todo";
    const data = todo
    console.log(JSON.stringify(data))
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.addedTodo) {
                return json.addedTodo
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function deleteLink(linkId) {
    const url = "/link/" + linkId;
    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return "success";
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function addLink(link) {
    const url = "/link";
    const data = link
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.addedLink) {
                return json.addedLink
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function setUserWallpaper(wallpaperUrl) {
    const url = "/settings/set-wallpaper";
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
            if (json && json.currentUser && json.messages) {
                app.setState({ currentUser: json.currentUser });
                app.setState({ messages: json.messages });
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
    const url = "/settings/set-mood";
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

function setUserMusic(music_url){
    const url = "/set-music";
    const data = {"music_url": music_url}
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
    setUserMood,
    addLink,
    deleteLink,
    addTodo,
    completeTodo,
    getFrozenUsers,
    getActiveUsers,
    setUserMusic,
    freezeUser
}