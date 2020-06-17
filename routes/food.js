const express = require('express');
const router = express.Router();
const Food = require('./../Models/Food');

/* GET home page. */
router.post('/', async (req, res, next) => {

    try {        
        const newFood = req.body;
        const foodSaved = await Food.create(newFood);
        res.status(202).json(foodSaved);
    }
    catch (error) {
        next(error);
    }


    res.status(200).send();
});

router.get('/', async function(req, res, next) {

    const { startDate, endDate } = req.query;
    
    try {
        const foodList = await Food.find({
            date: {
                $gte: startDate,
                $lt: endDate
            }
        });
        res.status(200).json(foodList);
    }
    catch (error) {
        next(error);
    }
});



module.exports = router;
