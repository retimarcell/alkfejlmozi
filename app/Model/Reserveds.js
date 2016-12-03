'use strict'

const Lucid = use('Lucid')

class Reserved extends Lucid {
  movie () {
      return this.belongsTo('App/Model/Movie')
  }
}

module.exports = Reserved
