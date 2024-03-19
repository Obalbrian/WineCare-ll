const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const app = express();

app.use(cors())
app.use(express.json())


const PORT = 4000;

app.listen(PORT, ()=> {
    console.log('SERVIDOR FUNCIONANDO EN EL PUERTO', PORT);
    db();
});

module.exports = app