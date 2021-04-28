'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .notNullable()
      table.string('name').notNullable()
      table.string('lastname').notNullable()
      table.string('phone').notNullable()
      table.string('birthday').notNullable()
      table.string('address').notNullable()
      table.string('email').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
