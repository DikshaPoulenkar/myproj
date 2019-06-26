var express = require('express');
var app = express();

var listController = function(req,resp)
{
	console.log("JSON data received through REST api");
	var list = [
	{ProductId:1, ProductName: 'Television', Price: 50000},
	{ProductId:2, ProductName: 'Referigerator', Price: 30000},
	{ProductId:3, ProductName: 'AC', Price: 40000}
	]
	resp.send(list);
}

app.get('/List',listController);
var server=app.listen(8088,function()
{
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening on Port 8088..",host,port);  
})