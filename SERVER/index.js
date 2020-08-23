var express= require('express');
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var sever=require('http').Server(app);
sever.listen(80);

// create  router
app.get("/",function(req,res){
    res.render("trangchu");
})