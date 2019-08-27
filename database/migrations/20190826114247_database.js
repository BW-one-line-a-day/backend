
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', users => {
      users.increments('id');
      users
        .string('email', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
    })
    .createTable('dailylines', dl => {
        dl.increments()
        dl.string('note').notNullable()
        dl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        dl.string('date').notNullable()
    })
  }


exports.down = function(knex, Promise) {
return knex.schema
.dropTableIfExists('users')
.dropTableIfExists('dailylines')
};