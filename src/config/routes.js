const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const BiilingCycle = require('../api/billingCycle/billingCycleService')
    BiilingCycle.register(router, '/billingCycles')
}