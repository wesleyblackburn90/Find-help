'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        businessId: 1,
        rating: 5,
        review: "A great business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        businessId: 3,
        rating: 1,
        review: "A horrible business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        businessId: 3,
        rating: 3,
        review: "A mediocre business",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
