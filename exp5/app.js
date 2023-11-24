const express = require("express");
const app = express();


app.use(express.static(__dirname+"/assets"));

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/about.html");
})

app.get("/contact",(req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})

const port = process.env.PORT || 7777;
app.listen(port, ()=>{
    console.log("server start");
})