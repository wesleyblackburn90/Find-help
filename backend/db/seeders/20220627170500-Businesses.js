'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [
      {
        ownerId: 1,
        businessName: "Metal Health",
        description: "Making you feel better through the power of metal",
        address: "123 Metallica St",
        city: "Detroit",
        state: "Michigan",
        zipCode: "48224",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        businessName: "Feinstone Dentistry",
        description: "Its been six months. Time for your checkup!",
        address: "666 Teeth Ave",
        city: "Sunshine",
        state: "Florida",
        zipCode: "44444",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 3,
        businessName: "Compton Pediatrist",
        description: "We'll make your feet beautiful!",
        address: "5439 Foot Ln",
        city: "Feetsville",
        state: "Iowa",
        zipCode: "92853",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  }
};
