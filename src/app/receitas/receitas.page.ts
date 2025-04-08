import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
  standalone: false
})
export class ReceitasPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  favorito: boolean = false;
  toggleFavorito() {
    this.favorito = !this.favorito; 
  }

  like: boolean = false;
  toggleLike(){
    this.like = !this.like;
  }

  dislike: boolean = false;
  toggleDislike(){
    this.dislike = !this.dislike;
  }

  rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(value: number) {
    this.rating = value;
  }
    
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
