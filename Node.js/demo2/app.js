const express = require("express");
const app = express();
app.use(express.static(__dirname+'/assets'));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
})

app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
})
const port = process.env.PORT||3000
app.listen(port, function(){
    console.log("server start with port",port);
});

