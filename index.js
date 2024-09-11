const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./src/config/database')

const usuarioRoutes = require('./src/routes/usuarioRoutes')
const proyectoRoutes = require('./src/routes/proyectoRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/usuarios', usuarioRoutes)
app.use('/proyectos', proyectoRoutes)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found')
})

app.get('/', (req, res) => {
  res.send('Bienvenido a la API')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
