'use strict'

const Schema = use('Schema')

class ScreeningsTableSchema extends Schema {

  up () {
    this.create('screenings', (table) => {
      table.increments()
      table.integer('movie_id').unsigned().references('id').inTable('movies')
      table.string('date').notNullable()
      table.integer('rows').notNullable()
      table.integer('columns').notNullable()
    })
  }

  down () {
    this.drop('screenings')
  }

}

module.exports = ScreeningsTableSchema
