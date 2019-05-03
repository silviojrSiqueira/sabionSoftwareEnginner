import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  {
    path: '',
    children : [
      { 
        path: 'lista',
        component: ListagemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule { }
