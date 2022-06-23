import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavagePageRoutingModule } from './lavage-routing.module';

import { LavagePage } from './lavage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavagePageRoutingModule
  ],
  declarations: [LavagePage]
})
export class LavagePageModule {}
