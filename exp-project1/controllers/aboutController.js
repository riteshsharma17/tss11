const routes = require("express").Router();

app.get("/about", (req, res)=>{
    res.render("pages/about")
   }) 

   module.exports = routes;