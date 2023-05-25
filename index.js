const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const chefs = require('./data/chefs.json');
const chefsWithRecipes = require('./data/chefsWithRecipes.json');



app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/chefsWithRecipes', (req, res) => {
    res.send(chefsWithRecipes)
})

app.get('/', (req, res) => {
    res.send('Deshi Khabar')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})