import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { CadastroConteudo } from './cadastroConteudo.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroConteudo,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'cadastroConteudo',
        component: CadastroConteudo
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
