'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: DataTypes.INTEGER,
    businessName: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  }, {});
  Business.associate = function (models) {
    // associations can be defined here
  };
  return Business;
};
