'use strict';
module.exports = (sequelize, DataTypes) => {
  const RECIPE = sequelize.define('RECIPE', {
    title: DataTypes.STRING
  }, {});
  RECIPE.associate = function(models) {
    // associations can be defined here
  };
  return RECIPE;
};