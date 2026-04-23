require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

const githubData = {
  "login": "devsamir13",
  "id": 230183303,
  "node_id": "U_kgDODbhRhw",
  "avatar_url": "https://avatars.githubusercontent.com/u/230183303?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/devsamir13",
  "html_url": "https://github.com/devsamir13",
  "followers_url": "https://api.github.com/users/devsamir13/followers",
  "following_url": "https://api.github.com/users/devsamir13/following{/other_user}",
  "gists_url": "https://api.github.com/users/devsamir13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/devsamir13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/devsamir13/subscriptions",
  "organizations_url": "https://api.github.com/users/devsamir13/orgs",
  "repos_url": "https://api.github.com/users/devsamir13/repos",
  "events_url": "https://api.github.com/users/devsamir13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/devsamir13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Samir Ansari",
  "company": null,
  "blog": "",
  "location": "Lucknow, India",
  "email": null,
  "hireable": null,
  "bio": "BCA Final Year Student at BBDU | Aspiring MERN Full Stack Development ",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 4,
  "following": 6,
  "created_at": "2025-09-03T14:35:25Z",
  "updated_at": "2026-01-15T16:56:18Z"
}

app.get ("/", (req, res) => {
    res.send("Hello World")
})

app.get("/twitter", () => {
    res.send("samir")
})  

app.get("/login", (req, res) => {
    res.send("<h1>Please login at chai aur code</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})