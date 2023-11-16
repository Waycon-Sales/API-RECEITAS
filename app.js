const routes = require('./app/routes/routes.js')

const bodyParser = require('body-parser')
const express = require("express");
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

const port = 3000;
app.listen(port, () => {
    console.log("Servidor iniciado e executando na porta: " + port);
});