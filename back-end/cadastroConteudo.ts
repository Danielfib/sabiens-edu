import { Conteudo } from '../front-end/src/app/conteudo';
import bodyParser = require("body-parser");


export class CadastroConteudoBack {
  conteudos: Conteudo[] = [];

  criar(conteudo: Conteudo): Conteudo {
    var result = null;
    result = new Conteudo(conteudo.nome,conteudo.id,conteudo.descricao,undefined,undefined,undefined,undefined);
    this.conteudos.push(result);
    return result;
  }
  getConteudos(): Conteudo[]{
    return this.conteudos;
  }
}
