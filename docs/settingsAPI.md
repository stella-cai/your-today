# Settings API
### Path: /settings
### Related Models: [User](../models/user.js)
### Supported HTTP Verbs: ```POST```
---

### ```POST```: Route to change default wall paper in the logged-in account
**Route: /set-wallpaper**

**request**: 
```json
{
    'wallpaper': SOME_URL
}
```

**response**: does not have a body (code 200 if successful)

### ```POST```: Route to change the mood in the logged-in account
**Route: /set-mood**

**request**: 
```json
{
    'mood': 0 / 1
}
```

**response**: does not have a body (code 200 if successful)
