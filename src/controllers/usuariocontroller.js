const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body)
    await usuario.save()
    res.status(201).json(usuario)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' })
  }
}

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().populate('proyectos')
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}

const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const { proyectos: nuevosProyectos, ...restoDatos } = req.body
    const usuario = await Usuario.findById(id)

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    if (nuevosProyectos && nuevosProyectos.length > 0) {
      const proyectosActuales = usuario.proyectos || []
      const proyectosNoDuplicados = nuevosProyectos.filter(
        (proyecto) => !proyectosActuales.includes(proyecto)
      )
      usuario.proyectos.push(...proyectosNoDuplicados)
    }
    Object.assign(usuario, restoDatos)
    await usuario.save()
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' })
  }
}

const eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({ mensaje: 'Usuario eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' })
  }
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
}
