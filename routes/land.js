var express = require('express')
var router = express.Router()
var Land = require('../models/Land')

/*
 * GET all lands.
 */
router.get('/', async (req, res) => {
  try {
    const result = await Land.getAll()
    const results = {
      status: 'Successfully get all users',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * GET land by id.
 */
router.get('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Land.getById(req.params.id)
    const results = {
      status: 'Successfully get user',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * POST new land.
 * @param req in JSON format
 */
router.post('/', async (req, res) => {
  try {
    if (!req.body.nama || !req.body.email || !req.body.password || !req.body.no_telepon || !req.body.role) {
      return res.status(400).send({ status: 400, message: 'One or more data is missing' })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const payload = [
      req.body.nama,
      req.body.email,
      hashedPassword,
      req.body.no_telepon,
      req.body.role
    ]
    const result = await Land.create(payload)
    const results = {
      status: 'User created successfully',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * DELETE land by id.
 */
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Land.delete(req.params.id)
    const results = {
      status: 'User deleted successfully',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

module.exports = router
