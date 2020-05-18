const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    //medidas en base a 100g
    name: {type: String, required: true},
    kcal: {type: Number},
    fats: {type: Number},
    saturatedFats: {type: Number},
    carboHydrates: {type: Number},
    sugar: {type: String},
    proteins: {type: Number},
    salt: {type: Number},
    brand: {type: String, default:'Generic'},
    //createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    //type: {type: String, enum:["Legumes", "Edible plants", "Edible fungi", "Edible nuts and seeds","Baked goods", "Breads", "Dairy products", "Eggs", "Meat", "Cereals", "Seafood"]},
    fiber: {type: Number}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Ingredient = mongoose.model('Ingredient', ingredientSchema);
  
  module.exports = Ingredient;