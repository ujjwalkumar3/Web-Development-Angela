var express = require("express");
const https =  require("https");
const app = express();
app.listen(3000 , function()
{
  console.log("app listen on port 3000");
});
app.get("/" , function(req , res)
{
  https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=de0a61ee58c6d8dd9aadef120615d74b" , function(resapi)
{
  console.log(resapi.statusCode);
  resapi.on("data" , function(data)
{
  const dat = JSON.parse(data)
  console.log(dat);
  const temp = dat.main.temp;
  const icon = dat.weather[0].icon;
  const imageurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
  res.write("<h1>The temprature is "+temp);
  res.write("<img src =" + imageurl +">");
res.send()
});
});
});
