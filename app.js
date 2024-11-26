const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const medicoRoutes = require('./routes/medicoRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const ingresoRoutes = require('./routes/ingresoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/medico', medicoRoutes);
app.use('/paciente', pacienteRoutes);
app.use('/ingreso', ingresoRoutes);

sequelize.sync({ alter: true }).then(() => {
    console.log('Modelos sincronizados con la base de datos');
}).catch(err => console.error('Error al sincronizar modelos:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
