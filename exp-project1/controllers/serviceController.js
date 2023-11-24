const routes = require("express").Router();

app.get("/service", (req, res)=>{
    res.render("pages/service")
   }) 

   module.exports = routes;