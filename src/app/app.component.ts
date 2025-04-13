import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from './modal-configuracao/modal-configuracao.component';
import { Router } from '@angular/router';
//import { register } from 'swiper/element/bundle';
//register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private modalCtrl: ModalController,
              public router: Router,
              private menuCtrl: MenuController
  ) {}

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

  abrirCategoria(categoria: string) {
    this.router.navigate(['/tabs/categoria', categoria]);
  }

  logout() {
    this.menuCtrl.close();         
    this.router.navigate(['/login']); 
  }

}


