import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalReceitaComponent } from './modal-receita/modal-receita.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from './modal-configuracao/modal-configuracao.component';



@NgModule({
  declarations: [AppComponent, ModalReceitaComponent, ModalNotificacaoComponent, ModalConfiguracaoComponent, ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, IonicModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [ModalReceitaComponent, ModalNotificacaoComponent, ModalConfiguracaoComponent,]
})
export class AppModule {}

//export class ModalReceitaComponent{}



