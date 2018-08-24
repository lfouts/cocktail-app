const Sequelize = require('sequelize');
const sequelize = new Sequelize('cocktail_app',

process.env.DB_USERNAME,
process.env.DB_PASSWORD,
{
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.import(__dirname + '/models/rating');
sequelize.import(__dirname + '/models/user');
sequelize.import(__dirname + '/models/drink');



sequelize.sync();

module.exports = sequelize;
