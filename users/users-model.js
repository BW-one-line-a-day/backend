const db = require('../database/dbconfig')

module.exports = {
    add, 
    find,
    findBy,
    findById,
    deleteuser
}

function find() {
    return db('users').select('id', 'email')
}

function findBy(filter){
    return db('users').where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user)

    return findById(id)
}

function deleteuser(id) {
    return db('users')
        .where({ id })
        .del()
}

function findById(id){
    return db('users')
    .where({id})
    .first()
}