const Paciente = require('../models/paciente');

module.exports = {
    getAll: async (req, res) => {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    },
    create: async (req, res) => {
        const paciente = await Paciente.create(req.body);
        res.json(paciente);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const paciente = await Paciente.update(req.body, { where: { nss: id } });
        res.json(paciente);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await Paciente.destroy({ where: { nss: id } });
        res.sendStatus(200);
    },
    getByNSS: async (req, res) => {
        const { nss } = req.query;
        const paciente = await Paciente.findOne({ where: { nss } });
        res.json(paciente);
    }
};
