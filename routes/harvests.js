var express = require('express')
var router = express.Router()
var Harvest = require('../models/Harvest')

/*
 * GET all harvests.
 */
router.get('/', async (req, res) => {
  try {
    const result = await Harvest.getAll()
    const results = {
      status: 'Successfully get all harvests',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * GET harvest by land id.
 */
router.get('/:landId', async (req, res) => {
  try {
    if (!req.params.landId) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Harvest.getById(req.params.landId)
    const results = {
      status: 'Successfully get harvest',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * POST new harvest.
 * @param req in JSON format
 */
router.post('/:landId', async (req, res) => {
  try {
    if (!req.params.landId || !req.body.deskripsi || !req.body.waktu || !req.body.hasil || !req.body.profit) {
      return res.status(400).send({ status: 400, message: 'One or more data is missing' })
    }
    const payload = [
      req.params.landId,
      req.body.deskripsi,
      req.body.waktu,
      req.body.hasil,
      req.body.profit
    ]
    const result = await Harvest.create(payload)
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
 * DELETE harvest by id.
 */
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Harvest.delete(req.params.id)
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
