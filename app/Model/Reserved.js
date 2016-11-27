'use strict'

const Lucid = use('Lucid')

class Reserved extends Lucid {
  screening () {
      return this.belongsTo('App/Model/Screening')
  }
}

module.exports = Reserved
