const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedFoodSchema = new Schema({
    //medidas en base a 100g
    name: {type: String, required: true},
    kcal: {type: Number, required: true},
    fats: {type: Number, required: true},
    saturatedFats: {type: Number, required: true},
    carboHydrates: {Type: Number, required: true},
    sugar: {type: String},
    proteins: {type: Number, required: true},
    salt: {type: Number, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'SavedIngredient', required: true}],
    type: {type: String, enum:["vegan", "meat", "fish"], required: true},
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const SavedFood = mongoose.model('SavedFood', savedFoodSchema);
  
  module.exports = SavedFood;