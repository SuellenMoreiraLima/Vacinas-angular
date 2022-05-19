import { AppRoutingModule } from './../app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { VacinaRoutingModule } from './vacina-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormVacinaComponent } from './form-vacina/form-vacina.component';
import { ListarVacinaComponent } from './listar-vacina/listar-vacina.component';


@NgModule({
  declarations: [
    FormVacinaComponent,
    ListarVacinaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    VacinaRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    FormVacinaComponent,
    ListarVacinaComponent,
    
  ]
})
export class VacinaModule { }
