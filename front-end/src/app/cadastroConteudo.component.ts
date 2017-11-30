import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Conteudo } from './conteudo';
import { ConteudoService } from './conteudo.service';
import { Topico } from './topico';


@Component({
  selector: 'cadastroConteudo',
  templateUrl: './cadastroConteudo.component.html',
  styleUrls: ['./cadastroConteudo.component.css']
})
export class CadastroConteudo   {
  constructor(private conteudoService: ConteudoService) {}
  
  a: string;
  tituloTopico: string;
  descricaoTopico: string;
  conteudo: Conteudo = new Conteudo(this.a, this.a, this.a, this.a, [new Topico(this.tituloTopico,this.descricaoTopico)] , this.a);
  conteudos : Conteudo[];
  criarConteudo(meu: Conteudo): void {
      console.log(meu);
      this.conteudoService.criar(meu)
        .then(ab => {
          if (ab) {
            this.conteudos.push(ab);
            this.conteudo = new Conteudo(this.a, this.a, this.a, this.a, [new Topico(this.tituloTopico,this.descricaoTopico)] , this.a);
          } else {
            alert("oi mãe to na globo");
          }
      })
      .catch(erro => alert(erro));
  }

}


