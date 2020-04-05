# Music API
### Path: /music
### Related Models: [User](../models/user.js)
### Supported HTTP Verbs: ```POST```
---

### ```POST```: Route to add or change the playlist in the logged-in account
**Route: /**

**request**: 
```json
{
    'url': SOME_URL
}
```

**response**:
```json
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
} -- the User model that was logged in
```
