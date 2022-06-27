'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Reviews.associate = function (models) {
    Reviews.belongsTo(models.User, { foreignKey: "userId" });
    Reviews.belongsTo(models.Business, { foreignKey: "businessId" })
  };
  return Reviews;
};
