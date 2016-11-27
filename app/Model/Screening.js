'use strict'

const Lucid = use('Lucid')

class Screening extends Lucid {
  movie () {
    return this.belongsTo('App/Model/Movie')
  }

  reservations () {
    return this.hasMany('App/Model/Reserved')
  }
}

module.exports = Screening
