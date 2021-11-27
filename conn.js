require('dotenv').config()
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const mongodb = require('mongodb').MongoClient
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rq9hs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new mongodb(url)

async function conectar() {
    try{
        await client.connect()
        console.log('Conectado ao Banco de dados')
    }catch(erro){
        console.log(erro)
    }
}
conectar()
module.exports = client