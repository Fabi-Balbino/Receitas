import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
  standalone: false,
})
export class PesquisaPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
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

  abrirDetalhes() {
    this.router.navigate(['/receitas']);
  }

  doces =[
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
      titulo: 'Mousse de Maracujá',
      fotoReceita: '../../assets/images/receita/mousseMaracuja.png',
      descricao: 'Mousse de maracujá com leite condensado.',
      avaliacao: 4
    },
    {
      usuario: 'Vlad Dracula',
      fotoUsuario: '../../assets/images/perfil/dracula.png',
      titulo: 'Bolo Alagado',
      fotoReceita: '../../assets/images/receita/boloAlagado.png',
      descricao: 'Mousse de maracujá com leite condensado.',
      avaliacao: 3
    },
    
  ];

}
