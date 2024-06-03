const Sequelize = require('sequelize');

const sequelize = new Sequelize('social-media', 'root', 'rakshitha@27', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;