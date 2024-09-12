const express = require('express')
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuariocontroller')

const router = express.Router()

router.post('/', crearUsuario)
router.get('/', obtenerUsuarios)
router.put('/:id', actualizarUsuario)
router.delete('/:id', eliminarUsuario)

module.exports = router
