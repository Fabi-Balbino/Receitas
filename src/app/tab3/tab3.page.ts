import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalReceitaComponent } from '../modal-receita/modal-receita.component';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu'); // Ativa o menu se estiver desativado
    this.menuCtrl.open('customMenu'); //
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalReceitaComponent,
      cssClass: 'modal-personalizado'
    });

    await modal.present();
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

  abrirDetalhes() {
    this.router.navigate(['/receitas']);
  }

  receitas = [
    {
      usuario: 'Beatrix Kiddo',
      fotoUsuario: '../../assets/images/perfil/Beatrix.png',
      titulo: 'Suco Verde',
      fotoReceita: '../../assets/images/receita/sucoVerde.png',
      descricao: 'Suco verde detox com couve e limão.',
      avaliacao: 5
    },
    {
      usuario: 'Beatrix Kiddo',
      fotoUsuario: '../../assets/images/perfil/Beatrix.png',
      titulo: 'Brownie de Chocolate',
      fotoReceita: '../../assets/images/receita/brownie.png',
      descricao: 'Brownie macio com sabor intenso de chocolate.',
      avaliacao: 4
    },
    {
      usuario: 'Beatrix Kiddo',
      fotoUsuario: '../../assets/images/perfil/Beatrix.png',
      titulo: 'Pudim',
      fotoReceita: '../../assets/images/receita/pudim.png',
      descricao: 'Pudim lisinho de leite condensado com calda de caramelo.',
      avaliacao: 5
    },
    {
      usuario: 'Beatrix Kiddo',
      fotoUsuario: '../../assets/images/perfil/Beatrix.png',
      titulo: 'Cuscuz',
      fotoReceita: '../../assets/images/receita/cuscuz.png',
      descricao: 'Cuscuz fofinho, perfeito para comer com manteiga.',
      avaliacao: 5
    },
    {
      usuario: 'Beatrix Kiddo',
      fotoUsuario: '../../assets/images/perfil/Beatrix.png',
      titulo: 'Mousse de Maracujá',
      fotoReceita: '../../assets/images/receita/mousseMaracuja.png',
      descricao: 'Mousse de maracujá com leite condensado.',
      avaliacao: 4
    },
    
  ];

}
