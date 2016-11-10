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
app.use(express.static('../webui/view'));



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

app.post('/createUser', function(req,res) {
  currentSession = req.session;
  MongoDB.createUser(req.body.username, req.body.password).then(function(result){
    if(result!==0){
      currentSession.username = req.body.username;
      res.cookie("username", result);
      res.end("User angelegt: "+result);
    }
    else if(result===0){
      res.end("User "+ req.body.username+" already exists.");
    }
  })
});

app.post('/createQuestionEntry', function(req,res){
  currentSession = req.session;
  MongoDB.createEntry(req.body.question, req.body.answer).then(function(insertedArray){
      if(insertedArray!==0){

        res.send(insertedArray);
      }
  });
});


app.post('/logout',function(req,res){
  currentSession = req.session;
  currentSession.destroy();
  res.clearCookie("username");
  res.end();


});

app.get('/allQuestions', function(req,res){
  MongoDB.getQuestionsArray().then(function(){
    res.end("bla");
  });

});
app.listen(9123);
console.log("Server is now running on port 9123");
