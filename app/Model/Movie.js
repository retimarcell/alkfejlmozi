'use strict'

const Lucid = use('Lucid')

class Movie extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  screenings () {
    return this.hasMany('App/Model/Screening')
  }
}

module.exports = Movie
