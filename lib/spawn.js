'use strict'
const {spawn} = require('child_process')
const ProcessPromise = require('./promise.js')

class SpawnPromise extends ProcessPromise {
  constructor (first, ...rest) {
    switch (typeof first) {
      case 'function':
      case 'object':
        super(first)
        return

      case 'string':
        break

      default:
        throw new TypeError(`Invalid type of ${first}`)
    }

    const process = spawn(first, ...rest)
    super(process)
    Object.assign(this, {process})
  }
}

class ExtendedSpawnPromise extends SpawnPromise {
  on (...args) {
    this.process.on(...args)
  }

  once (...args) {
    this.process.once(...args)
  }

  get stdio () {
    return require('../utils/stdio.js')(this.process)
  }

  get stdin () {
    return this.process.stdin
  }

  get stdout () {
    return this.process.stdout
  }

  get stderr () {
    return this.process.stderr
  }
}

module.exports = Object.assign(SpawnPromise, {
  Extended: ExtendedSpawnPromise,
  SpawnPromise,
  ExtendedSpawnPromise
})
