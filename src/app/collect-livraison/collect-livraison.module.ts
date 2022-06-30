import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectLivraisonPageRoutingModule } from './collect-livraison-routing.module';

import { CollectLivraisonPage } from './collect-livraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectLivraisonPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CollectLivraisonPage]
})
export class CollectLivraisonPageModule {}
