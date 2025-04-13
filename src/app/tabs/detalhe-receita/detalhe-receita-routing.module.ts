import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheReceitaPage } from './detalhe-receita.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheReceitaPageRoutingModule {}
