const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers")
const app = express();

app.use(cors())
app.use(express.json())

app.get("/usuario/:id", controllers.getUsuarioPorID)
app.post("/registro", controllers.registro)
app.post("/login", controllers.login)

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log('SERVIDOR FUNCIONANDO EN EL PUERTO', PORT);
    db();
});

module.exports = app