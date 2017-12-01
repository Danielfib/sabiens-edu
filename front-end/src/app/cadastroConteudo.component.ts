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
  conteudo: Conteudo = new Conteudo("", "", "", "", [ ] ,"");
  conteudos : Conteudo[];
  topico: Topico[] = [];

  conteudoExistente: boolean = false;

  gravar(): void{
    this.conteudo.nome = this.titulo;
    this.conteudo.id = String(this.cadastroServico.quantidadeConteudos());
    this.conteudo.descricao = this.descricao ;
    this.conteudo.introducao= this.introducao;
    this.topico.push(new Topico(this.nomeTopico,this.descricaoTopico))    
    this.conteudo.desenvolvimento = this.topico;
    this.conteudo.conclusao = this.conclusao;
    if ( this.cadastroServico.gravarConteudo(this.conteudo) ) {
      this.conteudos.push(this.conteudo);      
    }else{
      this.conteudoExistente=true;
      alert("Já existe um conteúdo com esse título");
    }
    this.topico = [];        
    this.conteudo = new Conteudo("", "", "", "", [ ] ,"");
    
  }

}
  
