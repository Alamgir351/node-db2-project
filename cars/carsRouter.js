const express = require('express')
const db = require('./carsDB')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const cars = await db.get()
        if (cars) { return res.status(200).json(cars) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const car = await db.getById(id)
        if (car.length > 0) { return res.status(200).json(car) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})

router.post('/', async (req, res) => {
    const body = req.body
    try {
        const car = await db.insertCar(body)
        if (car) { return res.status(200).json(car) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})

router.post('/sales', async (req, res) => {
    const body = req.body
    try {
        const sale = await db.insertSale(body)
        if (sale) { return res.status(200).json(sale) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})



router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const car = await db.getById(id)
        if (car) { return res.status(200).json(car) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const car = await db.update(id, body)
        if (car >= 1) { return res.status(200).json(body) }
        return res.status(400).json({ message: "O_o Something ain't right!" })
    } catch(e) {
        res.status(500).json({ message: ";-; We got a problem here. "})
    }
})



module.exports = router