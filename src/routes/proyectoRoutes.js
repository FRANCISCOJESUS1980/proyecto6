const express = require('express')
const {
  crearProyecto,
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto
} = require('../controllers/proyectoController')

const router = express.Router()

router.post('/', crearProyecto)
router.get('/', obtenerProyectos)
router.put('/:id', actualizarProyecto)
router.delete('/:id', eliminarProyecto)

module.exports = router
