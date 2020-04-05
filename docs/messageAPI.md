# Message API
### Path: /message
### Related Models: [Message](../models/message.js)
### Supported HTTP Verbs: ```GET```, ```DELETE```
---
### ```GET```: Route to get all messages sent to the user
**Route: /**

**Request:** does not have a body

**Response:**
```json
[
    {
        "_id": MESSAGE_ID
        "sender": USERNAME，
        "to": USERNAME,
        "subject": SOME_WORDS,
        "content": SOME_WORDS,
        "date": TIMESTAMP
    }, ...
] -- a list of Message models
```

### ```DELETE```: Route to delete a link in the logged-in account
**Route: /**

**request**: ```?id=MESSAGE_ID```

**response**:
```json
{
    "_id": MESSAGE_ID
    "sender": USERNAME，
    "to": USERNAME,
    "subject": SOME_WORDS,
    "content": SOME_WORDS,
    "date": TIMESTAMP
} -- the Message model deleted
```