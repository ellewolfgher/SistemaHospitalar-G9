const express = require('express')
const app = express()

const client = require('./conn')
const dbo = client.db('hospital')

const port = 7000

const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir: ('views/partials/')
})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + 'public'))

app.listen(port, ()=> {
    console.log('servidor rodando')
})