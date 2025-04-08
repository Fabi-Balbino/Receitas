import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalNotificacaoComponent } from '../modal-notificacao/modal-notificacao.component';
import { ModalConfiguracaoComponent } from '../modal-configuracao/modal-configuracao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController, private router: Router) {}

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
  

  /*slideOpts = {
    slidesPerView: 1.2,  // mostra um pouco do próximo card
    spaceBetween: 10,
    freeMode: true
  };*/

  recentes = [
    {
      usuario: 'Elizabeth Bennet',
      fotoUsuario: '../../assets/images/perfil/Elizabeth.png',
      titulo: 'Lasanha à Bolonhesa',
      fotoReceita: '../../assets/images/receita/lasanha.png',
      descricao: 'Lasanha recheada com carne bovina e queijos.',
      avaliacao: 4
    },
    {
      usuario: 'Lars Lindstrom',
      fotoUsuario: '../../assets/images/perfil/lars.png',
      titulo: 'Escondidinho de Frango',
      fotoReceita: '../../assets/images/receita/escondidinho.png',
      descricao: 'Escondidinho de frango com batata.',
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

  pesquisados = [
    {
      usuario: 'Elizabeth Bennet',
      fotoUsuario: '../../assets/images/perfil/Elizabeth.png',
      titulo: 'Lasanha à Bolonhesa',
      fotoReceita: '../../assets/images/receita/lasanha.png',
      descricao: 'Lasanha recheada com carne bovina e queijos.',
      avaliacao: 4
    },
    {
      usuario: 'Ellie Williams',
      fotoUsuario: '../../assets/images/perfil/ellie.png',
      titulo: 'Tacacá',
      fotoReceita: '../../assets/images/receita/tacaca.png',
      descricao: 'Caldo cremoso e picante, feito com tucupi, jambu, camarão seco e etc.',
      avaliacao: 5
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

  
  favoritos = [
    {
      usuario: 'Elizabeth Bennet',
      fotoUsuario: '../../assets/images/perfil/Elizabeth.png',
      titulo: 'Lasanha à Bolonhesa',
      fotoReceita: '../../assets/images/receita/lasanha.png',
      descricao: 'Lasanha recheada com carne bovina e queijos.',
      avaliacao: 4
    },
    {
      usuario: 'Lars Lindstrom',
      fotoUsuario: '../../assets/images/perfil/lars.png',
      titulo: 'Escondidinho de Frango',
      fotoReceita: '../../assets/images/receita/escondidinho.png',
      descricao: 'Escondidinho de frango com batata.',
      avaliacao: 5
    },
    {
      usuario: 'Fitzwilliam Darcy',
      fotoUsuario: '../../assets/images/perfil/darcy.png',
      titulo: 'Torta de Frango',
      fotoReceita: '../../assets/images/receita/tortaFrango.png',
      descricao: 'Torta salgada e fofinha de liquidificador com recheio de frango.',
      avaliacao: 3
    },
  ];

  sugestoes = [
    {
      usuario: 'Red',
      fotoUsuario: '../../assets/images/perfil/red.png',
      titulo: 'Abobrinha Recheada',
      fotoReceita: '../../assets/images/receita/abobrinha.png',
      descricao: 'Abobrinha recheada com carne moída e queijo gratinado.',
      avaliacao: 4
    },
    {
      usuario: 'George Knightley',
      fotoUsuario: '../../assets/images/perfil/george.png',
      titulo: 'Sopa de Ervilha',
      fotoReceita: '../../assets/images/receita/sopaErvilha.png',
      descricao: 'Sopa de ervilha com bacon e costelinha defumada.',
      avaliacao: 3
    },
    {
      usuario: 'Calcifer',
      fotoUsuario: '../../assets/images/perfil/calcifer.png',
      titulo: 'Peixe Assado',
      fotoReceita: '../../assets/images/receita/filePeixe.png',
      descricao: 'File de peixe assado no forno com batatas.',
      avaliacao: 4
    },
  ];


}
