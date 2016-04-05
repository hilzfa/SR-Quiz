var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var app = express();
app.use(session({
  secret: '123456789qwertz',
  resave: false,
  saveUninitialized: true
}));
var MongoDB = require('./logic/mongoConnection');

app.use(bodyParser.json());
app.use(cookieParser());

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

  currentSession = req.session;
  if(currentSession.username == req.cookies['username'] && currentSession.username != undefined){
    res.sendFile('/view/main.html', {root: rootView });
  }
  else{
    res.redirect('/authenticate');
  }

});

app.get('/authenticate',function(req,res){

  currentSession = req.session;

  if(currentSession.username == req.cookies['username'] && currentSession.username != undefined){
    res.redirect('/');
  }else{
    res.sendFile('index.html', {root: rootView });
  }

});

app.post('/authenticate',function(req,res) {
  currentSession = req.session;
  MongoDB.authenticate(req.body.username,req.body.password).then(function (feedback) {
    if (feedback) {
      currentSession.username = req.body.username;
      res.cookie("username", feedback[0].username);
      res.end(JSON.stringify(feedback[0]));
    }
    else {
      res.end('error');
    }
  });
});


app.post('/logout',function(req,res){
  currentSession = req.session;
  currentSession.destroy();
  res.clearCookie("username");
  res.end();


});


app.listen(8000);
console.log("Server is now running on port 8000");
