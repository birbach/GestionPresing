import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductMenuPage } from './product-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ProductMenuPage
  },  {
    path: 'lavage',
    loadChildren: () => import('./lavage/lavage.module').then( m => m.LavagePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductMenuPageRoutingModule {}
