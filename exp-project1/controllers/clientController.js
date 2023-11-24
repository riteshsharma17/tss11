const routes = require("express").Router();

routes.get("/",(res,req)=>{
    res.render("pages/client")
})


   module.exports = routes;
