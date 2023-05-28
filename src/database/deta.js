const { VB_DB_URL } = process.env

const { Deta } = require('deta')
const deta = Deta(VB_DB_URL)
const db = deta.Base('visitor_badge')

module.exports = {
  async pv(id) {
    let get = await db.get(id)

    if (!get) {
      get = { pv: 1, uv: [] }
    } else {
      get.pv++
    }

    const result = await db.put(get, id)

    return result.pv
  },
  async uv(id, ip) {
    const get = (await db.get(id)) || { pv: 1, uv: [] }

    if (!get.uv.includes(ip)) {
      get.uv.push(ip)
      await db.put(get, id)
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
