import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductMenuPageRoutingModule } from './product-menu-routing.module';

import { ProductMenuPage } from './product-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductMenuPageRoutingModule
  ],
  declarations: [ProductMenuPage]
})
export class ProductMenuPageModule {}
