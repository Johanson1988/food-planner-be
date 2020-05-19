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
    const Ingredient = require('./../Models/Ingredient');
    const createError = require('http-errors');
    try {
        switch (Object.keys(req.query)[0]) {
            case '_id':
                console.log(Object.keys(req.query));
                const foundIngredient = await Ingredient.find(req.query);
                if (foundIngredient == false) next(createError(404));
                else res.status(200).json(foundIngredient);
                break;
            case 'name':
                const { name } = req.query;
                const ingredientList = await Ingredient.find({ "name" : { "$regex": name, "$options": "i" } }, {name: true});
                if (ingredientList == false) next(createError(404));
                else res.status(200).json(ingredientList);                
                break;
            default:
                next(createError(404));
                break;
        }
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;