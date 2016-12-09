'use strict'

const Schema = use('Schema')

class ReservedsTableSchema extends Schema {

  up () {
    this.create('reserveds', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('movie_id').unsigned().references('id').inTable('movie')
      table.integer('row').notNullable()
      table.integer('column').notNullable()
      table.integer('taken').notNullable()
      table.string('seat').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reserveds')
  }

}

module.exports = ReservedsTableSchema
