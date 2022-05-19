import { AppRoutingModule } from './../app-routing.module';
import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { ListarVacinacaoComponent } from './listar-vacinacao/listar-vacinacao.component';
import { FormVacinacaoComponent } from './form-vacinacao/form-vacinacao.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormVacinacaoComponent,
    ListarVacinacaoComponent
  ],
  imports: [
    CommonModule,
    VacinacaoRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    FormVacinacaoComponent,
    ListarVacinacaoComponent,
    
  ]
})
export class VacinacaoModule { }
