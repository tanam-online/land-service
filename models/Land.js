var pool = require('../db/config')

exports.getAll = async () => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM lahan;')
  client.release()
  return result
}

exports.getById = async (id) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM lahan WHERE id = $1;', [id])
  client.release()
  return result
}

exports.getByUserId = async (userId) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM lahan WHERE id_pengguna = $1;', [userId])
  client.release()
  return result
}

exports.create = async (payload) => {
  const client = await pool.connect()
  const result = await client.query(`INSERT INTO lahan (id_pengguna, nama, deskripsi, tanaman, created_at) 
                                     VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *;`, payload)
  client.release()
  return result
}

exports.delete = async (id) => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM lahan WHERE id = $1 RETURNING *;', [id])
  client.release()
  return result
}
