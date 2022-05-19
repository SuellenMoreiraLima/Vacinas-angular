import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'usuario', component: ListarComponent},
    {path:'usuario/criar', component: FormUsuarioComponent},
    {path: 'usuario/editar/:idUsuario', component: FormUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }