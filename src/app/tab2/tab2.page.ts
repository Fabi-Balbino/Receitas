import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController
  ) {}

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu'); // Ativa o menu se estiver desativado
    this.menuCtrl.open('customMenu'); //
  }
  
  async abrirModalNotificacao() {
    const modal = await this.modalCtrl.create({
      component: ModalNotificacaoComponent,
      cssClass: 'modalNotificacao',
    });

    await modal.present();
  }

  async abrirModalConfiguracao() {
    const modal = await this.modalCtrl.create({
      component: ModalConfiguracaoComponent,
      cssClass: 'modalNotificacao',
    });

    await modal.present();
  }
}
