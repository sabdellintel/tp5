const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Paciente = sequelize.define('Paciente', {
    nss: { type: DataTypes.BIGINT, primaryKey: true },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    codigo_postal: DataTypes.INTEGER,
    telefono: DataTypes.STRING,
    nro_historial_clinico: DataTypes.INTEGER,
    observaciones: DataTypes.TEXT
});

module.exports = Paciente;
