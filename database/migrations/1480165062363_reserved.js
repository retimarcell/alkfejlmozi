'use strict'

const Schema = use('Schema')

class ReservedTableSchema extends Schema {

  up () {
    this.create('reserved', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('screening_id').unsigned().references('id').inTable('screenings')
      table.integer('row').notNullable()
      table.integer('column').notNullable()
    })
  }

  down () {
    this.drop('reserved')
  }

}

module.exports = ReservedTableSchema
