const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/customer-details", require("../controllers/CustomerController"));
routes.use("/customer-list", require("../controllers/Customer-listController"));

module.exports = routes;