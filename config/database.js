const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('clinica', '', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
