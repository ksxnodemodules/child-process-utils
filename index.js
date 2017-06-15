'use strict'

function create ({
  ExtendedPromise = require('extended-promise')
} = {}) {
  return {ExtendedPromise}
}

module.exports = {
  create,
  get main () {
    return create()
  }
}
