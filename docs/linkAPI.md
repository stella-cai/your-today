# Link API
### Path: /link
### Related Models: [User](../models/user.js)
### Supported HTTP Verbs: ```GET```, ```POST```, ```DELETE```
---
### ```GET```: Route to get all links in the logged-in account
**Route: /**

**Request:** does not have a body

**Response:**
```json
[
    {
        "_id": LINK_ID
        "url": SOME_URL,
        "displayName": SOME_WORDS
    }, ...
] -- a list of Link models
```

### ```POST```: Route to add a new link to the logged-in acount
**Route: /**

**request**:
```json
{
    "url": SOME_URL,
    "displayName": SOME_WORDS
}
```

**response**:
```json
{
    "_id": LINK_ID
    "url": SOME_URL,
    "displayName": SOME_WORDS
} -- the Link model added
```

### ```DELETE```: Route to delete a link in the logged-in account
**Route: /**

**request**: ```?id=MESSAGE_ID```

**response**:
```json
{
    "_id": LINK_ID
    "url": SOME_URL,
    "displayName": SOME_WORDS
} -- the Link model deleted
```