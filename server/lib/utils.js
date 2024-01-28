const clientURI = process.env.NODE_ENV === 'development' ? process.env.CLIENT_URI : process.env.CLIENT_URI_PROD
module.exports = { clientURI };