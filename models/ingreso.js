const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ingreso = sequelize.define('Ingreso', {
    id_ingreso: { type: DataTypes.INTEGER, primaryKey: true },
    fecha_ingreso: DataTypes.DATE,
    nro_habitacion: DataTypes.INTEGER,
    nro_cama: DataTypes.INTEGER,
    observaciones: DataTypes.TEXT,
    nro_historial_paciente: DataTypes.INTEGER,
    matricula_medico: DataTypes.INTEGER
});

module.exports = Ingreso;
