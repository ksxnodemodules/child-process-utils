'use strict'
const functionize = require('./utils/funtionize.js')
const ProcessPromise = require('./lib/promise.js')
const SpawnPromise = require('./lib/spawn.js')

const spawn = Object.assign(
  functionize(SpawnPromise),
  {
    extended: functionize(SpawnPromise.Extended)
  }
)

module.exports = {
  ProcessPromise,
  SpawnPromise,
  spawn
}
