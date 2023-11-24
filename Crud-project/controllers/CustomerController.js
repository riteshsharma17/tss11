const routes = require("express").Router();

routes.get("/",(req, res)=>{
    res.render("pages/customer-details");
})

module.exports = routes;