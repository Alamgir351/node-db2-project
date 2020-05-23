const db = require('../data/dbconfig')

module.exports = {
    get,
    getById,
    insertCar,
    update,
    remove
}

function get() {
    return db('cars')
}

function getById(id) {
    return db('cars').where({id})
}

async function insertCar(car) {
    const res = await db('cars').insert(car)
    if (res.rowCount >= 1) { return car }
}

function update(id, car) {
    return db('cars').where({id}).update(car)
}

async function remove(id) {
    const car = await getById(id)
    db('cars').where({id}).del().then(res => console.log(res))
    return car
}
