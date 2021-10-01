import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheBoloPage } from './detalhe-bolo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheBoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheBoloPageRoutingModule {}
