const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB conectado')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
    process.exit(1)
  }
}

module.exports = connectDB
