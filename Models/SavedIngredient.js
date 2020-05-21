const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedIngredientSchema = new Schema({
    //medidas en base a 100g
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    units: { type: Number, required: true},
    //createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    ingredientRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true},
    cooked: { type: String, enum:["raw", "fryed", "boiled", "baked", "iron"] ,required: true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const SavedIngredient = mongoose.model('SavedIngredient', savedIngredientSchema);
  
  module.exports = SavedIngredient;