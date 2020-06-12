const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message:`Welcome, ${process.env.NAME}`,
        location:process.env.LOCATION
    })
})

module.exports = router