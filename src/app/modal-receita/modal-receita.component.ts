import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-receita',
  templateUrl: './modal-receita.component.html',
  styleUrls: ['./modal-receita.component.scss'],
  standalone: false,
})
export class ModalReceitaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, 
              private menuCtrl: MenuController,
              private alertController: AlertController) { }

  fechar() {
    this.modalCtrl.dismiss();
  }

  imagemPreview: string | null = null;

  selecionarImagem(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async mostrarAlertaSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Sua receita foi publicada com sucesso.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  ngOnInit() {}

}
