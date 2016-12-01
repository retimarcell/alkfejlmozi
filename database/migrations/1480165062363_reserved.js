'use strict'

const Schema = use('Schema')

class ReservedTableSchema extends Schema {

  up () {
    this.create('reserved', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('movie_id').unsigned().references('id').inTable('movie')
      table.integer('row').notNullable()
      table.integer('column').notNullable()
      table.integer('taken').notNullable()
    })
  }

  down () {
    this.drop('reserved')
  }

}

module.exports = ReservedTableSchema
