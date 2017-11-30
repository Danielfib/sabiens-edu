import express = require('express');
import bodyParser = require("body-parser");
import { Conteudo } from '../front-end/src/app/conteudo';
import { CadastroConteudoBack } from './cadastroConteudo';
var app = express();


var cadastro: CadastroConteudoBack = new CadastroConteudoBack();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());


app.get('/conteudo', function (req, res) {
    res.send(JSON.stringify(cadastro.getConteudos()));
})

app.post('/conteudo', function (req: express.Request, res: express.Response) {
    var conteudo: Conteudo = <Conteudo> req.body; //verificar se é mesmo Aluno!
    conteudo = cadastro.criar(conteudo);
    if (Conteudo) {
      res.send({"success": "O aluno foi cadastrado com sucesso"});
    } else {
      res.send({"failure": "O aluno não pode ser cadastrado"});
    }
  })

app.get('/exemplo', function () {
    console.log('Example!')
    
})

app.post('/exemplo', function () {
    console.log('Example!')
    
})

app.put('/exemplo', function () {
    console.log('Example!')
})

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
  
  function closeServer(): void {
     server.close();
  }
  
  export { app, server, closeServer }