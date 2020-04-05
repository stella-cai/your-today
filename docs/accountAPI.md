# Account API
### Path: /account
### Related Models: [User](../models/user.js), [FrozenAccount](../models/frozenAccount.js)
### Supported HTTP Verbs: ```GET```, ```POST```, ```DELETE```
---
### ```GET```: Route to get all frozen accounts
**Route: /frozen**

**Request:** does not have a body

**Response:**
```json
[
  {
    "_id": FROZENACCOUNT_ID,
    "account_id": USER_ID,
    "username": USERNAME,
    "reason": SOME_WORDS,
    "date": TIMESTAMP
  }, ...
] -- a list of FrozenAccount models
```

### ```GET```: Route to get all active accounts
**Route: /active**

**Request:** does not have a body

**Response:**
```json
[
  {
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
  }, ...
] -- a list of User models
```

### ```POST```: Route to freeze an account
**Route: /freeze**

**request**:
```json
{
  "id": USER_ID,
  "username": USERNAME,
  "reason": SOME_WORDS
}
```

**response**:
```json

{
    "_id": FROZENACCOUNT_ID,
    "account_id": USER_ID,
    "username": USERNAME,
    "reason": SOME_WORDS,
    "date": TIMESTAMP,
} -- the FrozenAccount model added
```

### ```DELETE```: Route to unfreeze an account
**Route: /unfreeze**

**request**:
```json
{
  "id": FROZENACCOUNT_ID,
}
```

**response**:
```json
{
    "_id": FROZENACCOUNT_ID,
    "account_id": USER_ID,
    "username": USERNAME,
    "reason": SOME_WORDS,
    "date": TIMESTAMP
  } -- the FrozenAccount model deleted
```