require("../config/db")
const mongoose = require("mongoose")
 const clientSchema  = mongoose.Schema({
FullName : String,
Email : String,
Contact : String,
Address : String,
Genader : String
 });

 const client = mongoose.model("client",clientSchema)
 module.exports = client;