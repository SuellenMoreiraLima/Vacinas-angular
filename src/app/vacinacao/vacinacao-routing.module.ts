import { FormVacinacaoComponent } from './form-vacinacao/form-vacinacao.component';
import { ListarVacinacaoComponent } from './listar-vacinacao/listar-vacinacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'vacinacao', component: ListarVacinacaoComponent},
  {path:'vacinacao/criar', component: FormVacinacaoComponent},
  {path: 'vacinacao/editar/:idVacinacao', component: FormVacinacaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacaoRoutingModule { }