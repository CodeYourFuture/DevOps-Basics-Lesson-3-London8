const pino = require('pino')

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: true
    }
  },
})

module.exports = { logger };
