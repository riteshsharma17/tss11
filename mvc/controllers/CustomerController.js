const routes = require("express").Router();
const Emp = require("../models/customer");

routes.get("/",(req, res)=>{
    res.render("pages/customer-details");
})
routes.get("/list", async   (req, res)=>{
    let result = await Emp.find();  
    let pagedata = {result : result};     
    res.render("pages/customer-list", pagedata);
})

routes.post("/save", async(req, res)=>{
   await Emp.create(req.body);
   res.redirect("/customer/list");
})

routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await Emp.deleteMany({_id : id});
    res.redirect("/customer/list");
})

routes.get("/update/:id", async(req, res)=>{
    let id = req.params.id;
    let pagedata = {result};
    res.render("pages/update");
})
module.exports = routes;