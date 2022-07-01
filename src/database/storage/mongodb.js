const { VB_DB_URL } = process.env

const VB = 'visitor_badge'

let db

async function connectDatabase() {
  if (db) return

  const { MongoClient } = require('mongodb')
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  const client = await MongoClient.connect(VB_DB_URL, options)

  const dbName = new URL(VB_DB_URL).pathname.substring(1)
  db = await client.db(dbName || VB)
}

module.exports = async (ip, pageID, type) => {
  try {
    await connectDatabase()

    const options = {}
    const query = { pageID }
    if (type === 'uv') {
      options.$addToSet = { uv: ip }
    } else {
      options.$inc = { pv: 0 }
    }
    await db.collection(VB).findOneAndUpdate(query, options, { upsert: true })
    const result = await db.collection(VB).findOne(query)
    return type === 'uv' ? result.uv.length : result.pv
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
