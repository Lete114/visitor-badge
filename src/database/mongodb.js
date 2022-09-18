const { MongoClient } = require('mongodb')

const { VB_DB_URL } = process.env
const VB = 'visitor_badge'
let db

async function connectDatabase() {
  if (db) return
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  const client = await MongoClient.connect(VB_DB_URL, options)

  const dbName = new URL(VB_DB_URL).pathname.substring(1)
  db = await client.db(dbName || VB)
}

module.exports = {
  async pv(id) {
    await connectDatabase()
    const options = { $inc: { pv: 1 } }
    await db.collection(VB).findOneAndUpdate({ id }, options, { upsert: true })
    const result = await db.collection(VB).findOne({ id })
    return result.pv
  },
  async uv(id, ip) {
    await connectDatabase()
    const options = { $addToSet: { uv: ip } }
    await db.collection(VB).findOneAndUpdate({ id }, options, { upsert: true })
    const result = await db.collection(VB).findOne({ id })
    return result.uv.length
  },
  async list() {
    await connectDatabase()
    const result = await db.collection(VB).find().toArray()
    const datas = {}
    for (const item of result) {
      const id = item.id
      datas[id] = {}
      datas[id].pv = item.pv
      datas[id].uv = item.uv.length
    }
    return datas
  }
}
