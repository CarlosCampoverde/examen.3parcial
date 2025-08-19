const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Integración continua funcionando');
});

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
