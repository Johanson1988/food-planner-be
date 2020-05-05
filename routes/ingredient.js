const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {
    try {
        const Ingredient = require('./../Models/Ingredient');
        const newIngredient = req.body;
        const ingredientSaved = await Ingredient.create(newIngredient);
        res.status(202).json(ingredientSaved);
    }
    catch (error) {
        next(error);
    }
});

router.get('/', async function(req, res, next) {
    try {
        const Ingredient = require('./../Models/Ingredient');
        const foundIngredient = await Ingredient.find(req.query);
        if (foundIngredient == false) res.status(404).send();
        else res.status(200).json(foundIngredient);
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;