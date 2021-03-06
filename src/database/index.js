const { VB_DB_TYPE } = process.env

module.exports = async function () {
  try {
    const db = (VB_DB_TYPE || '').toUpperCase()

    switch (db) {
      case 'MONGODB':
        return await require('./storage/mongodb')(...arguments)
      case 'REDIS':
        return await require('./storage/redis')(...arguments)
      case 'DETA':
        return await require('./storage/deta')(...arguments)
      default:
        throw new Error('No matching database found')
    }
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Database connect fault')
    console.error(error)
    /* eslint-enable */
  }
}
