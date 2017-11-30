import { Conteudo } from './conteudo';

export class ConteudoService {
  conteudos: Conteudo[] = [];
  gravar(conteudo: Conteudo): Conteudo {
    var result = null;
    this.conteudos.push(conteudo);
    console.log(this.conteudos);
    result = conteudo;
    return result;
  }
  
}