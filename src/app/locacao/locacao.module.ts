import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocacaoRoutingModule } from './locacao-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule,
    LocacaoRoutingModule,
    ComponentsModule
  ]
})
export class LocacaoModule { }
