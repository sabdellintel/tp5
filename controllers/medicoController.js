const Medico = require('../models/medico');

module.exports = {
    getAll: async (req, res) => {
        const medicos = await Medico.findAll();
        res.json(medicos);
    },
    create: async (req, res) => {
        const medico = await Medico.create(req.body);
        res.json(medico);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const medico = await Medico.update(req.body, { where: { matricula: id } });
        res.json(medico);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await Medico.destroy({ where: { matricula: id } });
        res.sendStatus(200);
    },
    getByEspecialidad: async (req, res) => {
        const { especialidad } = req.query;
        const medicos = await Medico.findAll({ where: { especialidad } });
        res.json(medicos);
    }
};
