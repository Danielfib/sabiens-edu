import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { CadastroSistema } from './cadastroSistema.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroSistema,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'cadastroSistema',
        component: CadastroSistema
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
