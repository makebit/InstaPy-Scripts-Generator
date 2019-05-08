<img src="https://media2.giphy.com/media/xUA7aXtaxK3rOnOfok/giphy.gif" align="right" height=100>

# InstaPy Code Generator

## WORK IN PROGRESS

[InstaPy](https://github.com/timgrossmann/InstaPy) has a lot of APIs, remembering and using all of them is quite difficult.

### It would be nice to have an UI to quickly generate scripts for InstaPy... let's try to DO IT!

The goal of this project is to provide an easy and fast way to generate scripts for **InstaPy**

---

### Main concepts

- the UI is builded with an JSON file containing all the information about the APIs. Ex:

```json
...
{
    "name": "like_by_feed",
    "description": "This is used to perform likes on your own feeds",
    "params": [{
        "name": "amount",
        "spec": {
            "kind": "simple",
            "type": "int"
        },
        "description": "It specifies how many total likes you want to perform",
        "optional": true
    }, {
        "name": "randomize",
        "spec": {
            "kind": "simple",
            "type": "bool"
        },
        "description": "It randomly skips posts to be liked on your feed",
        "optional": true
    }, {
        "name": "unfollow",
        "spec": {
            "kind": "simple",
            "type": "bool"
        },
        "description": "It unfollows the author of a post which was considered inappropriate",
        "optional": true
    }, {
        "name": "interact",
        "spec": {
            "kind": "simple",
            "type": "bool"
        },
        "description": "It visits the author's profile page of a certain post and likes a given number of his pictures, then returns to feed",
        "optional": true
    }]
},
...
```
- the UI is builded with HTML + CSS + JS and will be a simple page where users can generate their script online without downloading or installing any software
- APIs are organized into groups
- the user select which feature to enable through a simple UI
- the app will generate the script with the features selected

## Progress

| First Header  | Second Header |
| ------------- | ------------- |
| convert the [documentation](https://github.com/timgrossmann/InstaPy/blob/master/DOCUMENTATION.md) into a JSON file | WORKING ON IT  |
|  develop and design the UI  | WORKING ON IT  |
|  build the generator  | TO-DO  |

## Contributions

If you like the idea, you are very welcome to work on this project!