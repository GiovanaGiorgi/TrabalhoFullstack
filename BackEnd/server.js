const express = require('express');
const app = express();
const port = 4000;
const rotas = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})