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

module.exports = router