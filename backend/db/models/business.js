'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: DataTypes.INTEGER,
    businessName: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  }, {});
  Business.associate = function (models) {
    // associations can be defined here
    Business.hasMany(models.Review, { foreignKey: "businessId", onDelete: "CASCADE", hooks: true })
    Business.belongsTo(models.User, { foreignKey: "ownerId" })

  };
  return Business;
};
