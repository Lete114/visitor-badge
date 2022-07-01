const { VB_DB_URL, DETA_PROJECT_KEY } = process.env

let db

async function connectDatabase() {
  if (db) return
  const { Deta } = require('deta')
  const deta = Deta(DETA_PROJECT_KEY || VB_DB_URL)
  db = deta.Base('visitor_badge')
}

module.exports = async (ip, pageID, type) => {
  try {
    await connectDatabase()
    const get = (await db.get(pageID)) || { pv: 0, uv: ['0.0.0.0'] }
    const result = await db.put(get, pageID)
    const update = {}

    if (type === 'uv') {
      result.uv.push(ip)
      update.uv = [...new Set(result.uv)]
    } else {
      update.pv = db.util.increment()
    }
    await db.update(update, pageID)
    return type === 'uv' ? update.uv.length : result.pv + 1
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
