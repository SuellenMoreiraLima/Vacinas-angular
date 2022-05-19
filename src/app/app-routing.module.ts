import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import { ListarComponent } from './usuario/listar/listar.component';
import { FormVacinacaoComponent } from './vacinacao/form-vacinacao/form-vacinacao.component';
import { ListarVacinacaoComponent } from './vacinacao/listar-vacinacao/listar-vacinacao.component';
import { FormVacinaComponent } from './vacina/form-vacina/form-vacina.component';
import { ListarVacinaComponent } from './vacina/listar-vacina/listar-vacina.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  //{path: 'vacina', component: ListarVacinaComponent},
  //{path:'vacina/criar', component: FormVacinaComponent},
  //{path: 'vacina/editar/:idVacina', component: FormVacinaComponent},
  //{path: 'vacinacao', component: ListarVacinacaoComponent},
  //{path:'vacinacao/criar', component: FormVacinacaoComponent},
 // {path: 'vacinacao/editar/:idVacinacao', component: FormVacinacaoComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }