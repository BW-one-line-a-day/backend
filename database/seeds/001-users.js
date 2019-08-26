
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test@gmail.com', password: 'password'},
        {id: 2, email: 'admin@gmail.com', password: 'password'},
      ]);
    });
};
