// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Instruction = sequelize.define('Instruction', {
//     specification: DataTypes.TEXT,
//     listOrder: DataTypes.INTEGER,
//     recipeId: DataTypes.INTEGER
//   }, {});
//   Instruction.associate = function(models) {
//     Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
//   };
//   return Instruction;
// };

//After changes:
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    Instruction.hasMany(models.Ingredient, {foreignKey: 'ingredientId'});
  };
  return Instruction;
};
