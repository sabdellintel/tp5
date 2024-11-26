const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medico = sequelize.define('Medico', {
    matricula: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    observaciones: DataTypes.TEXT
});

module.exports = Medico;
