const { VB_DB_URL } = process.env

const Redis = require('ioredis')
const db = new Redis(VB_DB_URL)

module.exports = {
  async pv(pageID) {
    return await db.incr(pageID)
  },
  async uv(pageID, ip) {
    const uv = 'uv_' + pageID
    await db.sadd(uv, ip)
    return await db.scard(uv)
  },
  async list() {
    const keys = await db.keys('*')
    const datas = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const newKey = key.replace(/^uv_/, '')
      if (!datas[newKey]) datas[newKey] = {}

      const type = await db.type(key)
      if (type === 'set') {
        datas[newKey].uv = +(await db.scard(key))
      }
      if (type === 'string') datas[newKey].pv = +(await db.get(key))
    }
    return datas
  }
}
