import { AppRoutingModule } from './../app-routing.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormUsuarioComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    ListarComponent,
    
  ]
})
export class UsuarioModule { }
