const mongoose = require('mongoose')

const proyectoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
})

const Proyecto = mongoose.model('Proyecto', proyectoSchema)
module.exports = Proyecto
