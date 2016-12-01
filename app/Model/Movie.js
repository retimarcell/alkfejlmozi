'use strict'

const Lucid = use('Lucid')

class Movie extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  reserved () {
    return this.hasMany('App/Model/Reserved')
  }
}

module.exports = Movie
