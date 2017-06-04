var express = require("express");
var app = express();

var port = process.env.PORT;

app.get('/',function(req,res){
    res.send('Ola Mundo de novo!');
});

app.get('/routing',function(req,res){
    res.send('Em Roteamento!');
});

app.listen(port,function(err){
   console.log("O Servidor esta sendo executado na porta...: " + port); 
});