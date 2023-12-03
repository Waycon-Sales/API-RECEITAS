const routes = require('./routes/routes.js')
const dbtables = require("./database/dbTables.js");
const CategoriaControler = require("./controllers/CategoriaController.js")
const bodyParser = require('body-parser')
const express = require("express");
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

dbtables.createTables();
//dbtables.dropTables();

const port = 3000;
app.listen(port, () => {
    console.log("Runing - Servidor iniciado e executando na porta: " + port);
});