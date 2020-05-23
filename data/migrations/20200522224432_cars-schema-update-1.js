
exports.up = function(knex) {
  return knex.schema.createTable('sales', function(second) {
      second.increments('id')
      second.integer('car_id').references('id').inTable('cars').notNull()
      second.integer('sold_price').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sales')
};
