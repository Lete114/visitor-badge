require('dotenv').config()
require('output-line')()
const { readFileSync } = require('fs')
const { join } = require('path')
const bodyData = require('body-data')
const GetUserIP = require('get-user-ip')
const { makeBadge } = require('badge-maker')
const { VB_HEADERS, VB_DB_TYPE } = process.env

const styles = ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']
let html = ''

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

    if (req.url === '/') {
      if (!html) html = readFileSync(join(__dirname, '../public/index.html'), { encoding: 'utf8' })
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(html)
      return
    }

    res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8')

    const options = {
      style: styles.includes(data.style) ? data.style : 'flat',
      message: 'Missing param: id',
      color: data.color || '4c1',
      label: data.label || 'visitors',
      labelColor: data.labelColor || '555'
    }

    // 预览
    if (/^\/preview/.test(req.url)) {
      options.message = '1'
      return res.end(makeBadge(options))
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
