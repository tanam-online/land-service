var pool = require('../db/config')

exports.getAll = async () => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM data_manual;')
  client.release()
  return result
}

exports.getById = async (landId) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM data_manual WHERE id_lahan = $1;', [landId])
  client.release()
  return result
}

exports.create = async (payload) => {
  const client = await pool.connect()
  const result = await client.query(`INSERT INTO data_manual (id_lahan, deskripsi, aktivitas, waktu) 
                                     VALUES ($1, $2, $3, $4) RETURNING *;`, payload)
  client.release()
  return result
}

exports.delete = async (id) => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM data_manual WHERE id = $1 RETURNING *;', [id])
  client.release()
  return result
}
