const { VB_DB_TYPE, VB_DB_URL } = process.env

module.exports = async (pageID) => {
  try {
    if (!VB_DB_URL) throw new Error('No environment variables set "VB_DB_URL"')
    const db = (VB_DB_TYPE || '').toUpperCase()

    switch (db) {
      case 'MONGODB':
        return await require('./storage/mongodb')(pageID)
      case 'REDIS':
        return await require('./storage/redis')(pageID)
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
