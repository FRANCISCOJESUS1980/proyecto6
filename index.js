import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Atlas conectado'))
  .catch((err) => console.error(err))

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
