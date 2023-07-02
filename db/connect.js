const mongoose = require("mongoose");

// Conection to the database

mongoose.connect("mongodb://127.0.0.1:27017/product-api",{
    useCreateIndex : true,
    useNewUrlParser: true, 
    useUnifiedTopology:true,
}).then(()=> {
    console.log("Connection established Successfully...");
}).catch((err)=> {
    console.log("Connection Failed");
 })