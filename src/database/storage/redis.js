const { VB_DB_URL } = process.env

let db

async function connectDatabase() {
  if (db) return
  const Redis = require('ioredis')
  db = new Redis(VB_DB_URL)
}

module.exports = async (pageID) => {
  try {
    await connectDatabase()
    return await db.incr(pageID)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
