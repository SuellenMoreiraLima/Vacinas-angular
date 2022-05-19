import { ListarVacinaComponent } from './listar-vacina/listar-vacina.component';
import { FormVacinaComponent } from './form-vacina/form-vacina.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'vacina', component: ListarVacinaComponent},
    {path:'vacina/criar', component: FormVacinaComponent},
    {path: 'vacina/editar/:idVacina', component: FormVacinaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }