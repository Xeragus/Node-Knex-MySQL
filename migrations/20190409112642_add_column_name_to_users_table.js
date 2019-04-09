
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.string('name').nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
      table.dropColumn('name')
  })
}
