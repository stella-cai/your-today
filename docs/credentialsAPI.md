# Credentials API
### Path: /credential
### Related Model: [User](../models/user.js), [Message](../models/message.js)
### Supported HTTP Verbs: ```GET```, ```POST```
---
### ```GET```: Route logout of an account
**Route: /logout**

**Request:** does not have a body

**Response:** does not have a body (code 200 if successful)

### ```GET```: Route to get information for logged-in account
**Route: /check-loggedin**

**Request:** does not have a body

**Response:** 
```json
{
    "currentUser": {
        "_id": USER_ID,
        "mood": 0 / 1,
        "wallpaper": SOME_URL,
        "username": USERNAME,
        "email": SOME_EMAIL_ADDRESS,
        "password": SOME_HASHED_STRING,
        "firstname": SOME_WORDS,
        "lastname": SOME_WORDS,
        "birthday": TIMESTAMP,
        "playlist": SOME_URL,
        "securityQuestions": [
            {
                "_id": SECURITYQUESTION_ID,
                "question": SOME_WORDS,
                "answer": SOME_WORDS
            },
            {
                "_id": SECURITYQUESTION_ID,
                "question": SOME_WORDS,
                "answer": SOME_WORDS
            },
            {
                "_id": SECURITYQUESTION_ID,
                "question": SOME_WORDS,
                "answer": SOME_WORDS
            }
        ],
        "todoList": [
            {
                "_id": TODO_ID,
                "what": SOME_WORDS,
                "when": TIMESTAMP
            }, ...
        ],
        "linkList": [
            {
                "_id": LINK_ID,
                "url": SOME_URL,
                "displayName": SOME_WORDS
            }, ...
        ]
    },
    "messages": [
        {
            "_id": MESSAGE_ID,
            "sender": USERNAME,
            "to": USERNAME,
            "subject": SOME_WORDS,
            "content": SOME_WORDS,
            "date": TIMESTAMP
        }, ...
    ] -- a list of message to the user
}

```

### ```POST```: Route to authenticate an account
**Route: /auth**

**request**:
```json
{
    "username": USERNAME,
    "password": PASSWORD
}
```

**response**: does not have a body (code 200 if successful)

### ```POST```: Route to reset password for an account
**Route: /reset**

**request**:
```json
{
    "username": USERNAME,
    "password": PASSWORD,
    "securityQuestions": [
        {
            "question": SOME_WORDS,
            "answer": SOME_WORDS
        },
        {
            "question": SOME_WORDS,
            "answer": SOME_WORDS
        },
        {
            "question": SOME_WORDS,
            "answer": SOME_WORDS
        }
    ],
}
```

**response**: does not have a body (code 200 if successful)