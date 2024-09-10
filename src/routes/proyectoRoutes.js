const express = require('express')
const Proyecto = require('../models/proyecto')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const proyecto = new Proyecto(req.body)
    const savedProyecto = await proyecto.save()

    const usuario = await Usuario.findById(req.body.usuario)
    usuario.proyectos.push(savedProyecto._id)
    await usuario.save()

    res.status(201).json(savedProyecto)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('usuario')
    res.status(200).json(proyectos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
