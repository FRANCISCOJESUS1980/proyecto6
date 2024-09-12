const mongoose = require('mongoose')
const Proyecto = require('./models/Proyecto')
const Usuario = require('./models/Usuario')
require('dotenv').config()

const seedData = async () => {
  try {
    await Proyecto.deleteMany({})
    await Usuario.deleteMany({})

    const proyecto1 = new Proyecto({
      nombre: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1'
    })
    const proyecto2 = new Proyecto({
      nombre: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2'
    })
    await proyecto1.save()
    await proyecto2.save()

    const usuario = new Usuario({
      nombre: 'Paquito Cabrera',
      proyectos: [proyecto1._id, proyecto2._id]
    })
    await usuario.save()

    console.log('Datos sembrados correctamente')
  } catch (error) {
    console.error('Error al sembrar los datos', error)
  } finally {
    mongoose.connection.close()
  }
}

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conectado a MongoDB')
    return seedData()
  })
  .catch((err) => {
    console.error('Error al conectar con MongoDB:', err)
  })
