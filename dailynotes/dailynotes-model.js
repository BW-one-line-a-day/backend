const db = require('../database/dbconfig')

module.exports = {
    find,
    findById,
    findByUserId,
    add,
    update,
    remove,
}

function find(){
    return db('dailylines')
}

function findById(id) {
    return db('dailylines')
        .where({ id });
}

function findByUserId(user_id){
    return db('dailylines')
        .where({ user_id })
}

function add({ note, user_id, date }) {
    return db('dailylines').insert({ note, user_id, date });
}

function update({ note }, id) {
    return db('dailylines')
        .where({ id })
        .update({ note })
}

function remove(id) {
    return db('dailylines')
        .where({ id })
        .del()
}
