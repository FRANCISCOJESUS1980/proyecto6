const express = require('express')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const usuario = new Usuario(req.body)
    await usuario.save()
    res.status(201).json(usuario)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find().populate('proyectos')
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Usuario eliminado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
