const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
//const {users} = require('./user')

const msg = [
    {"role": "system", "content": "You are a helpful assistant."}
]

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
const apiToken = process.env.TOKEN

const users = new Map()


app.use(bodyParser.json())
app.use(cors())

app.post('/signup',(req,res) => {
    const username = req.body.name
    const password = req.body.password
    users.set(username,password)
    res.send('ok')
})

app.post('/signin',(req,res) => {
    const username = req.body.name
    const password = req.body.password
    if (users.has(username) && users.get(username) === password){
        res.send('true')
    } else {
        res.send('false')
    }

})

app.post('/chat', (req, res) => {
    const inputText = req.body.userInput
    msg.push({"role": "user", "content": inputText})
    axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: msg
    }, {headers:{Authorization: `Bearer ${apiToken}`}})
        .then((response) => {
            if (response.status !== 200) {
                res.send('Error')
            } else {
                const answer = response.data.choices[0].message.content
                msg.push({"role": "assistant", "content": answer})
                res.send(msg)
            }
        })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})