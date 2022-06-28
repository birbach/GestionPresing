import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdressPageRoutingModule } from './my-adress-routing.module';

import { MyAdressPage } from './my-adress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdressPageRoutingModule
  ],
  declarations: [MyAdressPage]
})
export class MyAdressPageModule {}
