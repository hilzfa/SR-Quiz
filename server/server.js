var express = require('express');
var app = express();

app.use(express.static('../webui'));

app.listen(8000);
console.log("Server is now running...");
