"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sameTitle = ((elem, title) => elem.element(protractor_1.by.name('titulos')).getText().then(text => text === title));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na página de Cadastro de Conteudo$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.$("a[name='sistemas']").click();
        yield protractor_1.$("a[name='botaoAdd']").click();
        yield protractor_1.browser.get("http://localhost:4200/cadastroConteudo"); // aguarda para entrar novamente na pagina
        //await expect(browser.getTitle()).to.eventually.equal('Sistema Respiratório'); // observa se voltou para pagina do sistema
    }));
    Given(/^So está contidos na lista de conteúdo o conteudo com seguinte titulo "([^\"]*)" , descricao de "([^\"]*)" , introducao de "([^\"]*)" , desenvolvimento com titulo de "([^\"]*)" e descricao "([^\"]*)" e por fim, conclusao com "([^\"]*)"$/, (titulo, descriConteudo, intro, nomeTopico, descriTopico, concl) => __awaiter(this, void 0, void 0, function* () {
        //await expect(browser.getTitle()).to.eventually.equal('Adicionar conteudo');//checa se está
        yield protractor_1.$("input[name='titulo']").sendKeys(titulo); //Adicionando o conteudo na lista
        yield protractor_1.$("input[name='descricao']").sendKeys(descriConteudo);
        yield protractor_1.$("textarea[name='introducao']").sendKeys(intro);
        yield protractor_1.$("textarea[name='nomeTopico']").sendKeys(nomeTopico);
        yield protractor_1.$("textarea[name='descricaoTopico']").sendKeys(descriTopico);
        yield protractor_1.$("textarea[name='conclusao']").sendKeys(concl);
        yield protractor_1.$("a[name='send']").click(); //inserir
    }));
    Given(/^Preencho o campo Título com "([^\"]*)"$/, (title) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/cadastroConteudo"); // aguarda para entrar novamente na pagina
        yield protractor_1.$("input[name='titulo']").sendKeys(title); //Adicionando o conteudo na lista
    }));
    Given(/^Preencho o campo Descricao com "([^\"]*)"$/, (descricao) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='descricao']").sendKeys(descricao);
    }));
    Given(/^Preencho o campo Introdução com "([^\"]*)"$/, (intro) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("textarea[name='introducao']").sendKeys(intro);
    }));
    Given(/^Preencho o campo Desenvolimento com título de  "([^\"]*)" e descrição de "([^\"]*)" $/, (titulo, descricao) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("textarea[name='nomeTopico']").sendKeys(titulo);
        yield protractor_1.$("textarea[name='descricaoTopico']").sendKeys(descricao);
    }));
    Given(/^Preencho o campo Conclusão com "([^\"]*)"$/, (conclusao) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("textarea[name='conclusao']").sendKeys(conclusao);
    }));
    When(/^Eu tento inserir o conteudo$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("a[name='send']").click();
    }));
    Then(/^Uma mensagem de erro em forma de alert com o texto  pois existe um conteudo com Título de$/, (alertMes, title) => __awaiter(this, void 0, void 0, function* () {
        /*var listaConteudo : ElementArrayFinder = element.all(by.name('listaconteudo'));
        await listaConteudo;
        var sameTitle = listaConteudo.filter(elem => sameTitle(elem,title));
        await sameTitle;
        await sameTitle.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));*/
    }));
});
