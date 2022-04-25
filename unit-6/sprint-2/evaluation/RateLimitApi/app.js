const express = require('express');
const app = express();
//const posts = require('./posts');
const posts = require('./post');
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    max : 10,
    windowMs: 60000
})

app.get('/posts', limiter, (req, res) => {
    res.send({
        status: "Success",
        posts : posts
    })
})
app.listen(8080, ()=> console.log("Listening on port 8080"));