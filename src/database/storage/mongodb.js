const { VB_DB_URL } = process.env

let db

async function connectDatabase() {
  if (db) return

  const { MongoClient } = require('mongodb')
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  const client = await MongoClient.connect(VB_DB_URL, options)

  db = await client.db('visitor_badge')
}

module.exports = async (pageID) => {
  try {
    await connectDatabase()
    const pagePV = 'vb_page_pv'

    const pagePVOpt = { $inc: { counter: 1 }, $setOnInsert: { pageID } }
    await db.collection(pagePV).findOneAndUpdate({ pageID }, pagePVOpt, { upsert: true })

    return (await db.collection(pagePV).findOne({ pageID })).counter
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
