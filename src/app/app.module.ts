import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponent } from './nome/nome.component';
import { SobrenomeComponent } from './sobrenome/sobrenome.component';
import { EmailComponent } from './email/email.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { SenhaComponent } from './senha/senha.component';
import { BotaoComponent } from './botao/botao.component';
import { NascimentoComponent } from './nascimento/nascimento.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponent,
    SobrenomeComponent,
    EmailComponent,
    TelefoneComponent,
    SenhaComponent,
    BotaoComponent,
    NascimentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
