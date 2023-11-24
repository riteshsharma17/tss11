require("../config/db");

const mongoose = require("mongoose");
const EmpSchema = mongoose.Schema({
   name : String,
   contact : String,
   address : String,
   gender : String,
   createAt : {type : Date, default : new Date()}
})
module.exports = mongoose.model("customer", EmpSchema);

