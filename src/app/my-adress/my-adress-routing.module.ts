import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdressPage } from './my-adress.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdressPageRoutingModule {}
