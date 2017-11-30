"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const conteudo_1 = require("../front-end/src/app/conteudo");
const cadastroConteudo_1 = require("./cadastroConteudo");
var app = express();
exports.app = app;
var cadastro = new cadastroConteudo_1.CadastroConteudoBack();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/conteudo', function (req, res) {
    res.send(JSON.stringify(cadastro.getConteudos()));
});
app.post('/conteudo', function (req, res) {
    var conteudo = req.body; //verificar se é mesmo Aluno!
    conteudo = cadastro.criar(conteudo);
    if (conteudo_1.Conteudo) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
app.get('/exemplo', function () {
    console.log('Example!');
});
app.post('/exemplo', function () {
    console.log('Example!');
});
app.put('/exemplo', function () {
    console.log('Example!');
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=sabiens-server.js.map