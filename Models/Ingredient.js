const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    //medidas en base a 100g
    name: {type: String, required: true, unique: true},
    kcal: {type: Number, required: true},
    fats: {type: Number, required: true},
    saturatedFats: {type: Number, required: true},
    carboHydrates: {Type: Number, required: true},
    sugar: {type: String},
    proteins: {type: Number, required: true},
    salt: {type: Number, required: true},
    brand: {type: String, required: true, default:'Generic'},
    //createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    type: {type: String, enum:["Legumes", "Edible plants", "Edible fungi", "Edible nuts and seeds","Baked goods", "Breads", "Dairy products", "Eggs", "Meat", "Cereals", "Seafood"], required: true},
    fiber: {type: Number, required: true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Ingredient = mongoose.model('Ingredient', ingredientSchema);
  
  module.exports = Ingredient;