require('output-line')()
const bodyData = require('body-data')
const GetUserIP = require('get-user-ip')
const { makeBadge } = require('badge-maker')
const counterHandler = require('./database')
const { homepage } = require('../package.json')

const styles = ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']

module.exports = async (req, res) => {
  if (req.url === '/favicon.ico') return

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate')
  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8')

  // 获取用户 IP
  const ip = GetUserIP(req, (process.env.VB_HEADERS || '').split(','))

  const data = await bodyData(req)
  data.type = (data.type || '').toLowerCase() === 'uv' ? 'uv' : 'pv'

  if (!Object.keys(data).length) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`<meta http-equiv="refresh" content="0;url=${homepage}">`)
    return
  }

  const options = {
    style: 'flat',
    message: 'Missing param: pageID',
    color: data.color || '#4c1',
    label: data.label || 'visitors',
    labelColor: data.labelColor || '#555'
  }

  if (!data.pageID) return res.end(makeBadge(options))

  if (data.style && styles.includes(data.style)) options.style = data.style

  const counter = await counterHandler(ip, data.pageID, data.type)

  options.message = counter.toString()

  res.end(makeBadge(options))
}
