# Todo API
### Path: /todo
### Related Models: [User](../models/user.js)
### Supported HTTP Verbs: ```GET```, ```POST```, ```DELETE```
---
### ```GET```: Route to get all todo items in the logged-in account
**Route: /**

**Request:** does not have a body

**Response:**
```json
[
    {
        "_id": TODO_ID
        "what": SOME_WORDS,
        "when": TIMESTAMP
    }, ...
] -- a list of Todo models
```

### ```POST```: Route to add a new todo to the logged-in acount
**Route: /**

**request**:
```json
{
    "what": SOME_WORDS,
    "when": TIMESTAMP
}
```

**response**:
```json
{
    "_id": TODO_ID
    "what": SOME_WORDS,
    "when": TIMESTAMP
} -- the Todo model added
```

### ```DELETE```: Route to delete a link in the logged-in account
**Route: /**

**request**: ```?id=TODO_ID```

**response**:
```json
{
    "_id": TODO_ID
    "what": SOME_WORDS,
    "when": TIMESTAMP
} -- the Todo model deleted
```
