import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectLivraisonPage } from './collect-livraison.page';

const routes: Routes = [
  {
    path: '',
    component: CollectLivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectLivraisonPageRoutingModule {}
