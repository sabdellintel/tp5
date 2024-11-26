const Ingreso = require('../models/ingreso');
const Paciente = require('../models/paciente');
const Medico = require('../models/medico');

module.exports = {
    create: async (req, res) => {
        const ingreso = await Ingreso.create(req.body);
        res.json(ingreso);
    },
    getAll: async (req, res) => {
        const ingresos = await Ingreso.findAll({
            include: [
                { model: Paciente, attributes: ['apellido', 'nombre'] },
                { model: Medico, attributes: ['apellido', 'nombre'] }
            ]
        });
        const response = ingresos.map(i => ({
            ...i.toJSON(),
            ApeNomPaciente: `${i.Paciente.apellido}, ${i.Paciente.nombre}`,
            ApeNomMedico: `${i.Medico.apellido}, ${i.Medico.nombre}`
        }));
        res.json(response);
    }
};
