'use strict'
const ExtendedPromise = require('extended-promise').createEventPromiseClass('exit', 'error')
class ProcessPromise extends ExtendedPromise {}
module.exports = ProcessPromise
