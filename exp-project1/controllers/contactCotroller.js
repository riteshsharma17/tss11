const routes = require("express").Router();


app.get("/contact", (req, res)=>{
    res.render("pages/contact")
   }) 

   module.exports = routes;