const express = require('express')

const app = express()

app.get('/greeting/:username', (req,res) => {
    const username = req.params.username
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1)
    res.send(`<h1>Hello there, ${capitalizedUsername}!</h1>`)
})

app.listen(3000, () => console.log('the server is running on port 3000'))

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const roll = Math.floor(Math.random() * number) + 1;
    if(number && number > 0){
    res.send(`<h1>You rolled a ${roll}!</h1>`)
}else{
    res.send(`<h1>Please provide a valid number!</h1>`)
}
})