import express from 'express'
import { sequelizeConnection } from '../database/connection.js'
const app = express()

const port = process.env.PORT || 8080

sequelizeConnection.authenticate()
  .then(async () => {
    console.log('Conexión a la base de datos establecida')
    await sequelizeConnection.sync({ force: true })
    console.log('Tablas sincronizadas')
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err)
  })

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
