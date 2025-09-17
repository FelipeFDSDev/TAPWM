let express = require('express');
let texto = require("./modulo1");

let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
   // res.send("<html><body>Site da FATEC Sorocaba</body></html>");
   res.render("home/index");
});

app.get('/formulario_adicionar_usuario', function(req,res){
   // res.send("<html><body>Site da FATEC Sorocaba</body></html>");
   res.render("admin/adicionar_usuario");
});

app.get('/historia', function(req,res){
    //res.send("<html><body>História da FATEC Sorocaba</body></html>")
    res.render("informacao/historia");
});

app.get('/cursos', function(req,res){
    //res.send("<html><body>Cursos da FATEC Sorocaba</body></html>")
    res.render("informacao/cursos");
});

app.get('/professores', function(req,res){
    //res.send("<html><body>Professores da FATEC Sorocaba</body></html>")
    res.render("informacao/professores")
});

app.listen(3000, function(){
    console.log(texto);
});

