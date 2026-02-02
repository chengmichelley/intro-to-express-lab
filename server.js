const express = require('express')

const app = express()

app.get('/greeting/:username', (req,res) => {
    const username = req.params.username
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1)
    res.send(`<h1>Hello there, ${capitalizedUsername}!</h1>`)
})

app.listen(3000, () => console.log('the server is running on port 3000'))
