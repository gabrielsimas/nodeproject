var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

//Roda o que está no diretório "public" do projeto
app.use(express.static('public'));

//Perite rodar o diretório de views para entrar a index
//app.use(express.static('src/views'));

//Deixa o diretório dos componentes do Bower visíveis para acesso
//E mude os caminhos nos arquivos que utilizam os caminhos antigos dos pacotes
//que agora são gerenciados pelo Bower
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

//Quando se acessa a raiz do site
app.get('/',function(req,res){
    res.render('index',{
        list: ['first val','2nd val','3rd val'],
        nav:  ['Services','Portfolio','About','Team','Contact']   
    });
});

app.listen(port,function(err){
   console.log("O Servidor esta sendo executado na porta...: " + port); 
});