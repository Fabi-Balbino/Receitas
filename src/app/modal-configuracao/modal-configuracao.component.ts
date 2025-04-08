import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-configuracao',
  templateUrl: './modal-configuracao.component.html',
  styleUrls: ['./modal-configuracao.component.scss'],
  standalone: false,
})
export class ModalConfiguracaoComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  fechar() {
    this.modalCtrl.dismiss();
  }
  
  ngOnInit() {}

}
