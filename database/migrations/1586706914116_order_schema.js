'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('product_id').unsigned().notNullable();
      table.integer('user_id').unsigned().notNullable();
      table.string('status', 80).notNullable();
      table.decimal('total_cost').notNullable()
      table.decimal('total_sale').notNullable()
      table.timestamps()

      table.foreign('product_id').references('id').inTable('products');
      table.foreign('user_id').references('id').inTable('users');
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
