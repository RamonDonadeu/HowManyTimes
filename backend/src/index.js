import express from 'express'
import { connectToDatabase } from './models/index.js'
const app = express()

const port = process.env.PORT || 8080

connectToDatabase()

app.get('/', function (req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', function (req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/', function (req, res) {
  res.json({ mensaje: 'Método post' })
})

app.delete('/', function (req, res) {
  res.json({ mensaje: 'Método delete' })
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
