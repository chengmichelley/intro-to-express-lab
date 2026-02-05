const express = require('express')

const app = express()

app.get('/greetings/:username', (req,res) => {
    const username = req.params.username
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1)
    res.send(`<h1>Hello there, ${capitalizedUsername}!</h1>`)
})

app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number);  
        if(isNaN(number)){
             return res.send("You must specify a number.");
            }
        if(number < 0) {
            res.send('Please provide a valid number!');
        }
    const roll = Math.floor(Math.random() * (number + 1));
        res.send(`<h1>You rolled a ${roll}!</h1>`);
    });

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    const index = parseInt(req.params.index);
    if (index >= 0 && index <collectibles.length) {
        res.send(`<h1>For this ${collectibles[index].name}, you can have it for the low price of $${collectibles[index].price}!</h1>`);
    }else{
        res.send('<h1>Sorry, this item is currently out of stock! Please, check back soon!</h1>');
    }

})

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req,res) => {
    let filteredShoes = shoes;
        if (req.query['min-price']) { 
            filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(req.query['min-price'])); } 
        if (req.query['max-price']) { 
            filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(req.query['max-price'])); }
        if(req.query.type) {
            filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type)}
    res.json(filteredShoes);
});


app.listen(3000, () => console.log('the server is running on port 3000'))
