import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalReceitaComponent } from '../modal-receita/modal-receita.component';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  ngOnInit() {
  }

  constructor(private menuCtrl: MenuController,
    private modalCtrl: ModalController
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
