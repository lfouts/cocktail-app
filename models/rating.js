module.exports = function(sequelize, DataTypes) {
  const Rating = sequelize.define("Rating", {
      starRating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
return Rating;
};
