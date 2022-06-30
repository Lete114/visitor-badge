require('output-line')()
const bodyData = require('body-data')
const { makeBadge } = require('badge-maker')
const counterHandler = require('./database')
const { homepage } = require('../package.json')

const styles = ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']

module.exports = async (req, res) => {
  if (req.url === '/favicon.ico') return

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8')

  const data = await bodyData(req)

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

  const counter = await counterHandler(data.pageID)

  options.message = counter.toString()

  res.end(makeBadge(options))
}
