import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'bolos',
  //   loadChildren: () => import('./pages/bolos/bolos.module').then( m => m.BolosPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/bolos/bolos.module').then( m => m.BolosPageModule)
  },
  {
    path: 'detalhe-bolo/:id',
    loadChildren: () => import('./pages/detalhe-bolo/detalhe-bolo.module').then( m => m.DetalheBoloPageModule)
  },
  {
    path: 'carrinho/:id',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
