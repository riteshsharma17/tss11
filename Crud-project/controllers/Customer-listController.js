const routes = require("express").Router();

routes.get("/",(req, res)=>{
    res.render("pages/customer-list");
})

module.exports = routes;