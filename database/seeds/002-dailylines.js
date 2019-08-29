
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dailylines').del()
    .then(function () {
      // Inserts seed entries
      return knex('dailylines').insert([
        { user_id: 1, note: 'I had an amazing day at the park.', date: 08242019},
        { user_id: 1, note: 'I had a great day at the game.', date: 08252019},
        { user_id: 2, note: 'I went outside.', date: 08262019},
        { user_id: 2, note: 'I had a pizza', date: 08272019 },
      ]);
    });
};
