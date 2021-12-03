require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const mongoose = require('mongoose');
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rq9hs.mongodb.net/hospital?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

try {
  mongoose.Promise = global.Promise;
  console.log('Atlas online');
} catch (error) {
  console.log('Erro de conexão ' + error);
}

module.exports = mongoose;
