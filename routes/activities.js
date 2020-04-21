var express = require('express')
var router = express.Router()
var Activity = require('../models/Activity')

/*
 * GET all activities.
 */
router.get('/', async (req, res) => {
  try {
    const result = await Activity.getAll()
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
 * GET activity by land id.
 */
router.get('/:landId', async (req, res) => {
  try {
    if (!req.params.landId) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Activity.getById(req.params.landId)
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
 * POST new activity.
 * @param req in JSON format
 */
router.post('/:landId', async (req, res) => {
  try {
    if (!req.params.landId || !req.body.deskripsi || !req.body.aktivitas || !req.body.waktu) {
      return res.status(400).send({ status: 400, message: 'One or more data is missing' })
    }
    const payload = [
      req.params.landId,
      req.body.deskripsi,
      req.body.aktivitas,
      req.body.waktu
    ]
    const result = await Activity.create(payload)
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
 * DELETE activity by id.
 */
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Activity.delete(req.params.id)
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
