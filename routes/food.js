const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', async (req, res, next) => {
    console.log(req.body);

    try {
        const Food = require('./../Models/Food');
        const newFood = req.body;
        const foodSaved = await Food.create(newFood);
        res.status(202).json(foodSaved);
    }
    catch (error) {
        next(error);
    }


    res.status(200).send();
});

module.exports = router;
