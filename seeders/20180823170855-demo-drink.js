'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('drinks', [
      //create seed data

          {
            name: 'The Aviation',
            description: 'Booze-forward, with Gin, Luxardo, and Creme de Violette. Refreshing for any season.',
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()
            // include: [{
            //   association: Ad.Advertiser
            // }]
          },
          {

            name: 'Manhattan',
            description: 'Booze-forward, with Rye Whiskey, sweet Vermouth, and Angostura Bitters. Perfect for Fall and Winter.',
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()

          },
          {

            name: 'Mint Julep',
            description: 'Three Words: Bourbon, Mint, and Simple Syrup.',
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()

          },
          {
            name: 'French 75',
            description: 'Gin, Champagne, Lemon Juice, and a little sugar. Simple, bubbly, and refreshing.',
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()

          },
          {
            name: 'Mojito',
            description: 'Refreshing, with white Rum, Sugar , Lime Juice, and Mint. True Summer staple',
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()

          }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('drinks', null, {});
  }
};
