/**
 * Created by D062653 on 25.06.2015.
 */
var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('referee', ['questions','users']);
var bodyParser = require('body-parser');
var count;
var app = express();

app.use(express.static(__dirname + '/frontend'));
app.use(bodyParser.json());



app.get('/getUser',function(req,res){
    db.users.find({},function(err,doc){
        console.log("i sent your users!");
        res.json(doc);
		console.log(err);
    });

});

app.get('/getQuestion',function(req,res){
    db.questions.find({},function(err,doc){
        console.log("somebody wants a question!");
        res.json(doc);
    });

});
//app.get('/feedback/', function (req, res) {
//    db.answer.find({question: "What drives success at SAP?"},function(err, doc) {
//        var result = doc[Math.floor((Math.random())*(doc.length))];
//        res.json(result);
//        });
//
//});
//
//app.post('/feedback', function (req, res) {
//        db.answer.insert(req.body, function(err, doc) {
//        res.json(doc);
//        console.log(doc);
//    });
//});


app.listen(2000);
console.log("RefereeQuiz runs on Port 2000");
