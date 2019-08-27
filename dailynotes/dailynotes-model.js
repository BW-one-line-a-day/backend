const db = require('../database/dbconfig')

module.exports = {
    find,
    findById,
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

function add({ note, user_id }) {
    return db('dailylines').insert({ note, user_id });
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
