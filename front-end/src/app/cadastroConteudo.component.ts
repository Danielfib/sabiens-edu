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
export class CadastroConteudo  {
  constructor(private conteudoService: ConteudoService) {}
  nome:string;
  id:string;
  descricao:string;
  titulo: string;
  introducao:string;
  nomeTopico:string;
  descricaoTopico:string;
  conclusao:string;

  conteudo: Conteudo = new Conteudo("nome ", "id ", "desc ", "titulo", " ", [ ] ," ");
  conteudos : Conteudo[];

  criarConteudo(nome:string,id:string ,descricao:string, titulo: string, introducao:string, nomeTopico:string, descricaoTopico:string, conclusao:string ): void { 
      this.conteudo.nome = nome;
      console.log(this.conteudo);
      this.conteudo.id = id;
      this.conteudo.descricao = descricao ;
      this.conteudo.titulo = titulo;
      this.conteudo.introducao= introducao;
      this.conteudo.conclusao = conclusao;
      
      this.conteudoService.criar(this.conteudo)
        .then(ab => {
          if (ab) {
            this.conteudos.push(ab);
            this.conteudo = new Conteudo(" ", " ", " ", " ", " ", [new Topico(" " ," ")] ," ");
          } else {
            alert("oi mãe to na globo");
          }
      })
      .catch(erro => alert(erro));
  }

  ngOnInit(): void {
    this.conteudoService.getConteudos()
        .then(as => this.conteudos = as)
        .catch(erro => alert(erro));
  }
}


