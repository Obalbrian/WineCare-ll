const mongoose = require("mongoose")

const mongo_url = "mongodb://localhost:27017"

const db = async () =>{
    await mongoose.connect(mongo_url)
    .then(()=> console.log("DATABASE FUNCIONANDO"))
    .catch((error)=> console.error(error));
};

module.exports = db