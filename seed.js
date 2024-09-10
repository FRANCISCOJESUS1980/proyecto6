const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Usuario = require('./src/models/Usuario')
const Proyecto = require('./src/models/proyecto')

dotenv.config()

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conectado a MongoDB')
    seedData()
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error)
  })

const seedData = async () => {
  await Usuario.deleteMany({})
  await Proyecto.deleteMany({})

  const usuario1 = new Usuario({
    nombre: 'Juan Pérez',
    email: 'juan@example.com'
  })
  const usuario2 = new Usuario({
    nombre: 'Ana Gómez',
    email: 'ana@example.com'
  })

  await usuario1.save()
  await usuario2.save()

  const proyecto1 = new Proyecto({
    nombre: 'Proyecto 1',
    descripcion: 'Descripción 1',
    usuario: usuario1._id
  })
  const proyecto2 = new Proyecto({
    nombre: 'Proyecto 2',
    descripcion: 'Descripción 2',
    usuario: usuario2._id
  })

  await proyecto1.save()
  await proyecto2.save()

  usuario1.proyectos.push(proyecto1._id)
  usuario2.proyectos.push(proyecto2._id)
  await usuario1.save()
  await usuario2.save()

  console.log('Datos insertados')
  mongoose.connection.close()
}

seedData()
