Feature: Manipulação de conteúdos 
	As an Administrador da aplicação
	I want to manipular os conteúdos em cada tópico que correspondem aos sistemas do corpo humano.
	So that eu possa disponibilizar o conteúdo na aplicação.

Scenario: Tentativa de inserção conteúdo à um sistema do corpo humano que já possui conteúdo com mesmo “título”.

Given Estou na página de Cadastro de Conteudo
Given So está contidos na lista de conteúdo o conteudo com seguinte titulo "Resumo rápido do Sistema Respiratorio" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "orem ipsum dolor sit" e por fim, conclusao com "orem ipsum dolor sit"
Given Preencho o campo Título com “Resumo rápido do Sistema Respiratorio” 
Given Preencho o campo Descricao com “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut” 
Given Preencho o campo Introdução com “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut” 
Given Preencho o campo Desenvolimento com título de  "dale" e descrição de "dale" 
Given Preencho o campo Conclusão com “Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut” 
When Eu tento inserir o conteudo
Then Uma mensagem de erro em forma de alert com o texto  pois existe um conteudo com Título de

Scenario: Inserindo conteúdo, que previamente não foi inserido, sem êxito, por falta de preenchimento do campo de “Conclusão e comentários”.

Given “Fátima” está na página “Sistema Respiratório”
Given so estão contidos na lista de conteúdo os seguintes “Curiosidades sobre os órgãos” , “Descobertas na área”.
Given preenche o campo “Título” com “Resumo do Sistema Respiratório”
Given preenche o campo “Introdução” com “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut” 
Given preenche o campo “Órgãos e explicações” com “Nome do órgão - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut” 
Given não preenche nada no campo de  “Conclusão e comentários”.
When “Fátima” adiciona um novo conteúdo
Then uma mensagem de erro é exibida devido a falta de preenchimento de um campo.
