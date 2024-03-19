const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log('SERVIDOR FUNCIONANDO EN EL PUERTO', PORT);
});