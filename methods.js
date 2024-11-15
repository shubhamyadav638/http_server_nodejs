// http methods get post delete put patch custom trace etc...


const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("i am get request")
 })
app.put('/')
app.delete('/')
app.post('/')


// thunderclient or postman
app.listen(8000)
