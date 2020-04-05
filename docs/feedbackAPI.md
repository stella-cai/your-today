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
    "_id": FEEDBACK_ID,
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
    "_id": FEEDBACK_ID,
    "user_id": USER_ID,
    "username": USERNAME,
    "feedback": SOME_WORDS,
    "read": 0
} -- the Message model added
```

### ```POST```: Route to mark a feedback as read
**Route: /read**

**request**:
```json
{
  "id": FEEDBACK_ID
}
```

**response**:
```json
{
    "_id": FEEDBACK_ID,
    "user_id": USER_ID,
    "username": USERNAME,
    "feedback": SOME_WORDS,
    "read": 1
} -- the Message model marked as read
```

---
