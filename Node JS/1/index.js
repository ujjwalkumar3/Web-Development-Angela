var superheroes = require("superheroes");
var express = require("express");
var mysup = superheroes.random();
var parser = require("body-parser");

var myapp = express();
myapp.use(parser.urlencoded({entended: true}));
myapp.get("/" , function(req , res)
{
res.send(mysup);
});
myapp.get("/contact" , function(req , res)
{
res.send("Syscloud");
});
myapp.get("/calculator" , function(req , res)
{
res.sendFile(__dirname + "/index.html");
});
myapp.post("/calculator" , function(req , res)
{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var resul = num1+num2;
  res.send("Thanks for calculating the numbers"+resul);
});
myapp.listen(3000 , function()
{
  console.log("App is listning");
});
