const bcrypt = require('bcryptjs')
const crypPass1 = bcrypt.hashSync('testpass', 20)
const crypPass2 = bcrypt.hashSync('adminpass', 20)


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'test@gmail.com', password: crypPass1},
        {email: 'admin@gmail.com', password: crypPass2},
      ]);
    });
};
