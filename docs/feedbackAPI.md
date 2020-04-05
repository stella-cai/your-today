# Feedback API
### Path: /account
### Related Models: [Feedback](../models/feedback.js)
### Supported HTTP Verbs: ```GET```, ```POST```, ```DELETE```
---
### ```GET```: Route to get all feedbacks
**Route: /**

**Request:** does not have a body

**Response:**
```json
[
  {
    "_id": MESSAGE_ID,
    "user_id": USER_ID,
    "username": USERNAME,
    "feedback": SOME_WORDS,
    "read": 0 / 1
  }, ...
] -- a list of Feedback models
```

### ```POST```: Route to post a new feedback
**Route: /**

**request**:
```json
{
    "feedback": SOME_WORDS
}
```

**response**:
```json
{
    "_id": MESSAGE_ID,
    "user_id": USER_ID,
    "username": USERNAME,
    "feedback": SOME_WORDS,
    "read": 0
} -- the Message model added
```

### ```DELETE```: Route to mark a feedback as read
**Route: /**

**request**:
```json
{
  "id": MESSAGE_ID
}
```

**response**:
```json
{
    "_id": MESSAGE_ID,
    "user_id": USER_ID,
    "username": USERNAME,
    "feedback": SOME_WORDS,
    "read": 1
} -- the Message model marked as read
```

---
### Additional Notes:
- The last route is a ```DELETE``` instead of a ```PATCH``` since we are considering the potential of viewing read feedbacks & deleting selected feedbacks in the future. 