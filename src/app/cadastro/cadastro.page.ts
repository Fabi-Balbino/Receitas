import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {

  
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async mostrarAlertaCadastro() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Cadastro realizado com sucesso.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'botao-ok',
          handler: () => {
            // Redireciona para a página de login
            this.router.navigate(['/login']);
          }
        }
      ],
      cssClass: 'alerta-customizado'
    });

    await alert.present();
  }

  realizarCadastro() {
    console.log('Cadastro realizado.');
    this.mostrarAlertaCadastro();
  }

  ngOnInit() {
  }



}
