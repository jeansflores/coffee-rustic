'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsIngredientsSchema extends Schema {
  up () {
    this.create('products_ingredients', (table) => {
      table.increments()
      table.integer('ingredient_id').unsigned().notNullable();
      table.integer('product_id').unsigned().notNullable();

      table.foreign('ingredient_id').references('id').inTable('ingredients');
      table.foreign('product_id').references('id').inTable('products');
    })
  }

  down () {
    this.drop('products_ingredients')
  }
}

module.exports = ProductsIngredientsSchema
