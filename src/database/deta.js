const { VB_DB_URL, DETA_PROJECT_KEY } = process.env

const { Deta } = require('deta')
const deta = Deta(DETA_PROJECT_KEY || VB_DB_URL)
const db = deta.Base('visitor_badge')

module.exports = {
  async pv(pageID) {
    let get = await db.get(pageID)

    if (!get) {
      get = { pv: 1, uv: [] }
    } else {
      get.pv++
    }

    const result = await db.put(get, pageID)

    return result.pv
  },
  async uv(pageID, ip) {
    const get = (await db.get(pageID)) || { pv: 1, uv: [] }

    if (!get.uv.includes(ip)) {
      get.uv.push(ip)
      await db.put(get, pageID)
    }

    return get.uv.length
  },
  async list() {
    let res = await db.fetch()
    let allItems = res.items

    // continue fetching until last is not seen
    while (res.last) {
      res = await db.fetch({}, { last: res.last })
      allItems = allItems.concat(res.items)
    }
    const datas = {}
    for (const item of allItems) {
      datas[item.key] = {}
      datas[item.key].pv = item.pv
      datas[item.key].uv = item.uv.length
    }

    return datas
  }
}
