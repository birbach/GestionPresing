import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavagePage } from './lavage.page';

const routes: Routes = [
  {
    path: '',
    component: LavagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavagePageRoutingModule {}
