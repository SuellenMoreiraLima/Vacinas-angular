import { VacinacaoModule } from './vacinacao/vacinacao.module';
import { VacinaModule } from './vacina/vacina.module';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './usuario/usuario.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    AppRoutingModule,
    FormsModule,
    VacinaModule,
    VacinacaoModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
