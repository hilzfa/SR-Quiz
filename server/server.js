var express = require('express');
var session = require('express-session');
var app = express();
var MongoDB = require('./logic/mongoConnection');

var bodyParser = require('body-parser');

MongoDB.connect();

app.use(bodyParser.json());
app.use(session({
  secret: '123456789qwertz',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(express.static('../webui/bower_components'));
app.use(express.static('../webui/controller'));
app.use(express.static('../webui/css'));
app.use(express.static('../webui/js'));
app.use(express.static('../webui/tpls'));
app.use(express.static('../webui/directives'));
app.use(express.static('../webui/img'));



var rootView = '../webui';

var currentSession;
app.get('/',function(req,res){
  res.redirect('/authenticate');
});

app.get('/authenticate',function(req,res){
  console.log("session: "+JSON.stringify(req.session));
  currentSession = JSON.stringify(req.session);
  console.log(currentSession.username);
  if(currentSession.username){
    res.redirect('/main');
  }else{
    res.sendFile('index.html', {root: rootView });
  }

});

app.post('/authenticate',function(req,res){
  // To Write a Cookie

  /* res.writeHead(200, {
   'Set-Cookie': 'username='+req.body.username,
   'Content-Type': 'text/plain'
   });*/
  res.cookie('username',req.body.username);
  res.end();


});

app.get('/main',function(req,res){
  res.sendFile('/view/main.html', {root: rootView });
});


app.listen(8000);
console.log("Server is now running on port 8000");
