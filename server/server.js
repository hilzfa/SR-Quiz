var express = require('express');
var app = express();
app.use(express.static('../webui/'));
var rootView = '../webui';



app.get('/',function(req,res){
  console.log(reg);
  res.sendFile('index.html', {root: rootView });

});


app.post('/',function(req,res){
  console.log(req.params.username);
  res.statusCode = 200;
    res.end();

});

app.get('/main',function(req,res){
  res.sendFile('/view/main.html', {root: rootView });
});


app.listen(8000);
console.log("Server is now running on port 8000");
