const Proyecto = require('../models/proyecto')

const crearProyecto = async (req, res) => {
  try {
    const proyecto = new Proyecto(req.body)
    await proyecto.save()
    res.status(201).json(proyecto)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear proyecto' })
  }
}

const obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find()
    res.json(proyectos)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' })
  }
}

const actualizarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(proyecto)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar proyecto' })
  }
}

const eliminarProyecto = async (req, res) => {
  try {
    await Proyecto.findByIdAndDelete(req.params.id)
    res.json({ mensaje: 'Proyecto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar proyecto' })
  }
}

module.exports = {
  crearProyecto,
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto
}
