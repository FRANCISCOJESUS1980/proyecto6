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

app.get('/', (req, res) => {
  res.send('Bienvenido a la API')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
