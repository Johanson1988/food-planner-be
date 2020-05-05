const express = require('express');
const router = express.Router();
const {convertToNumType} = require('./../helpers/helpers');

router.post('/', function(req, res, next) {
    try {
        //const Ingredient = require('./../Models/Ingredient');
        console.log(req.body);
        const newIngredient = convertToNumType(req.body);
        console.log(newIngredient);
        //const ingredientSaved = Ingredient.create(newIngredient);
        res.status(202).send();

    }
    catch (error) {
        console.error(error);
        next(error);
    }

});

module.exports = router;
