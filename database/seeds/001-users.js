const bcrypt = require('bcryptjs')
const crypPass = bcrypt.hashSync('password', 10)



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'test1@gmail.com', password: crypPass},
        {email: 'test2@gmail.com', password: crypPass},
        {email: 'test3@gmail.com', password: crypPass},
        {email: 'test4@gmail.com', password: crypPass},
        {email: 'test5@gmail.com', password: crypPass},
        {email: 'test6@gmail.com', password: crypPass},
        {email: 'test7@gmail.com', password: crypPass}
      ]);
    });
};
