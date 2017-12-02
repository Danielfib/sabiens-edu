import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Conteudo } from './conteudo';
import { ConteudoService } from './conteudo.service';
import { Topico } from './topico';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'cadastroConteudo',
  templateUrl: './cadastroConteudo.component.html',
  styleUrls: ['./cadastroConteudo.component.css']
})
export class CadastroConteudo {
  title = 'nozes';
  
  cadastroServico = new ConteudoService();
  titulo:string;
  id:string;
  descricao:string;
  introducao:string;
  nomeTopico:string;
  descricaoTopico:string;
  conclusao:string;
  conteudo: Conteudo = new Conteudo("", "", "", "", [ ] ,"");
  conteudos : Conteudo[]= [];
  topico: Topico[] = [];
  novo:Topico;

  conteudoExistente: boolean = false;

  gravar(): void{
    this.conteudo.nome = this.titulo;
    this.conteudo.id = String(this.cadastroServico.quantidadeConteudos());
    this.conteudo.descricao = this.descricao ;
    this.conteudo.introducao= this.introducao;
    this.novo = new Topico(this.nomeTopico,this.descricaoTopico) ;
    this.topico.push(new Topico(this.nomeTopico,this.descricaoTopico));
    this.conteudo.desenvolvimento = this.topico;
    this.conteudo.conclusao = this.conclusao;
    if ( this.cadastroServico.gravarConteudo(this.conteudo) ) { 
      this.conteudos.push(this.conteudo);
    }else{
      this.conteudoExistente=true;
      alert("Já existe um conteúdo com esse título");
    }
    this.conteudo = new Conteudo("", "", "", "", [ ] ,"");
    this.topico = [];        
    
    
  }

}
  
