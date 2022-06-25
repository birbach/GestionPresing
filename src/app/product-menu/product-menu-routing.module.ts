import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductMenuPage } from './product-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ProductMenuPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductMenuPageRoutingModule {}
