import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Conteudo } from './conteudo';

@Injectable()
export class ConteudoService {
  conteudos: Conteudo[]= [];
  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }


  criar(conteudo: Conteudo): Promise<Conteudo> {
    return this.http.post(this.taURL + "/conteudos",JSON.stringify(conteudo), {headers: this.headers})
    .toPromise()
    .then(res => {
       if (res.json().success) {return conteudo;} else {return null;}
    })
    .catch(this.deuRuim);
  } 

  private deuRuim(erro: any): Promise<any>{
    console.error('deu ruim',erro);
    return Promise.reject(erro.message || erro);
  }

  getConteudos(): Promise<Conteudo[]> {
    return this.http.get(this.taURL + "/conteudo")
    .toPromise()
    .then(res => res.json() as Conteudo[])
    .catch(this.deuRuim);
}
  
}