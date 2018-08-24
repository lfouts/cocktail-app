module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.hasMany(sequelize.models.Rating);
  return User;
};
