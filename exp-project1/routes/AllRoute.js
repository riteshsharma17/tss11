const routes = require("express").Router();

routes.use("/" , require("../controllers/homeController"));
//routes.use("/properties" , require("../controllers/propertiesController"));

module.exports = routes;