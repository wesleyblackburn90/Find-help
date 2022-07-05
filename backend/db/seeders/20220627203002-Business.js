'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [
      {
        ownerId: 1,
        businessName: "Metal Health",
        description: "Making you feel better through the power of metal",
        picture: "https://i.imgur.com/yvXJTQa.jpg",
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
        picture: "https://i.pinimg.com/originals/27/7f/d2/277fd24b0bcd0f358452c493ecd0aceb.jpg",
        address: "666 Teeth Ave",
        city: "Sunshine",
        state: "Florida",
        zipCode: "44444",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 3,
        businessName: "Compton Podiatrist",
        description: "We'll make your feet beautiful!",
        picture: "https://www.cmautah.com/wp-content/uploads/2018/05/Utah-Healthcare-Architecture-MOB-Riverton-Medical-Office-Building-768x465.jpg",
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
