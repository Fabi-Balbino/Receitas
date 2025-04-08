import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-notificacao',
  templateUrl: './modal-notificacao.component.html',
  styleUrls: ['./modal-notificacao.component.scss'],
  standalone: false,
})
export class ModalNotificacaoComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  fechar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
