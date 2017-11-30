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
export class CadastroConteudo {
  cadastroServico = new ConteudoService();
  titulo:string;
  id:string;
  descricao:string;
  introducao:string;
  nomeTopico:string;
  descricaoTopico:string;
  conclusao:string;

  conteudo: Conteudo = new Conteudo("nome ", "id ", "desc ", "titulo", " ", [ ] ," ");
  conteudos : Conteudo[];
  topico: Topico[] = [];
 
  

  gravar(s:Conteudo): void{
    this.conteudo.nome = this.titulo;
    this.conteudo.id = this.titulo;
    this.conteudo.descricao = this.descricao ;
    this.conteudo.titulo = this.titulo;
    this.conteudo.introducao= this.introducao;
    this.topico.push(new Topico(this.nomeTopico,this.descricaoTopico))    
    this.conteudo.desenvolvimento = this.topico;
    this.conteudo.conclusao = this.conclusao;
    console.log(this.conteudo);
    this.cadastroServico.gravar(this.conteudo);
  }
}
  
