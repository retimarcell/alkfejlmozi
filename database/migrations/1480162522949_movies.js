'use strict'

const Schema = use('Schema')

class MoviesTableSchema extends Schema {

  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.text('description')
      table.integer('hossz').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }

}

module.exports = MoviesTableSchema
