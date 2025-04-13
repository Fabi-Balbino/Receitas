import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheReceitaPageRoutingModule } from './detalhe-receita-routing.module';

import { DetalheReceitaPage } from './detalhe-receita.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheReceitaPageRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [DetalheReceitaPage]
})
export class DetalheReceitaPageModule {}
