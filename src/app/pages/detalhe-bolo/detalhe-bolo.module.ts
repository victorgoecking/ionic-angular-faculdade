import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheBoloPageRoutingModule } from './detalhe-bolo-routing.module';

import { DetalheBoloPage } from './detalhe-bolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheBoloPageRoutingModule
  ],
  declarations: [DetalheBoloPage]
})
export class DetalheBoloPageModule {}
