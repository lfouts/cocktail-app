module.exports = function(sequelize, DataTypes) {
  const Drink = sequelize.define("Drink", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  Drink.hasMany(sequelize.models.Rating);
  return Drink;
};
