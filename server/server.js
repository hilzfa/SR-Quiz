var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('../webui/'));


var rootView = '../webui';



app.get('/',function(req,res){
  res.sendFile('index.html', {root: rootView });

});


app.post('/',function(req,res){
	// To Write a Cookie
  
  res.writeHead(200, {
    'Set-Cookie': 'username='+req.body.username,
    'Content-Type': 'text/plain',
    'data': req.body.username
  }); 
  res.write(req.body.username);
  res.end();
	

});

app.get('/main',function(req,res){
  res.sendFile('/view/main.html', {root: rootView });
});


app.listen(8000);
console.log("Server is now running on port 8000");
