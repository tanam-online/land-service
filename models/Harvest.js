var pool = require('../db/config')

exports.getAll = async () => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM panen;')
  client.release()
  return result
}

exports.getById = async (landId) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM panen WHERE id_lahan = $1;', [landId])
  client.release()
  return result
}

exports.create = async (payload) => {
  const client = await pool.connect()
  const result = await client.query(`INSERT INTO panen (id_lahan, deskripsi, waktu, hasil, profit) 
                                     VALUES ($1, $2, $3, $4, $5) RETURNING *;`, payload)
  client.release()
  return result
}

exports.delete = async (id) => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM panen WHERE id = $1 RETURNING *;', [id])
  client.release()
  return result
}
