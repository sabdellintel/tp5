const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.get('/', ingresoController.getAll);
router.post('/', ingresoController.create);

module.exports = router;
