'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: {
      type:DataTypes.STRING,
      valide: {
        notEmpty:true
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
  };
  return Ingredient;
};
