require('dotenv').config()
require('output-line')()
const bodyData = require('body-data')
const GetUserIP = require('get-user-ip')
const { makeBadge } = require('badge-maker')
const { homepage } = require('../package.json')
const { VB_HEADERS, VB_DB_TYPE } = process.env

const styles = ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']

// eslint-disable-next-line max-statements
module.exports = async (req, res) => {
  try {
    if (req.url === '/favicon.ico') return

    const db = (VB_DB_TYPE || '').toLowerCase()

    if (!['mongodb', 'redis', 'deta'].includes(db)) throw new Error('No matching database found')

    const { pv, uv, list } = require('./database/' + db)

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate')
    res.setHeader('Content-Type', 'application/json;charset=utf-8')

    if (req.url === '/list') {
      const allData = await list()
      res.end(JSON.stringify(allData))
      return
    }

    const data = await bodyData(req)

    if (!Object.keys(data).length) {
      res.end(JSON.stringify({ source: homepage }))
      return
    }

    res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8')

    const options = {
      style: 'flat',
      message: 'Missing param: id',
      color: data.color || '#4c1',
      label: data.label || 'visitors',
      labelColor: data.labelColor || '#555'
    }

    if (data.pageID) data.id = data.pageID

    if (!data.id) return res.end(makeBadge(options))

    // 获取用户 IP
    const ip = GetUserIP(req, (VB_HEADERS || '').split(','))

    let counter = 0

    data.id = data.id.toLowerCase()
    if ((data.type || '').toLowerCase() === 'uv') {
      counter = await uv(data.id, ip)
    } else {
      counter = await pv(data.id)
    }

    if (data.style && styles.includes(data.style)) options.style = data.style

    options.message = counter.toString()

    res.end(makeBadge(options))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.writeHead(500)
    res.end('Internal server error, unable to complete request')
  }
}
