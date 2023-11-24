const routes = require("express").Router();

app.get("/properties", (req, res)=>{
    res.render("pages/properties")
   })


   module.exports = routes;