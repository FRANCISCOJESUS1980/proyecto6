const express = require('express')
const Proyecto = require('../models/proyecto')
const proyectos = require('../models/proyecto')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const proyecto = new Proyecto(req.body)
    const savedProyecto = await proyecto.save()

    const proyectos = await proyectos.findById(req.body.proyectos)
    proyectos.proyectos.push(savedProyecto._id)
    await proyectos.save()

    res.status(201).json(savedProyecto)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('proyectos')
    res.status(200).json(proyectos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const proyectos = await proyectos.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(proyectos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await proyectos.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'proyectos eliminado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
