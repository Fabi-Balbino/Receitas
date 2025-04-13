import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalConfiguracaoComponent } from 'src/app/modal-configuracao/modal-configuracao.component';
import { ModalNotificacaoComponent } from 'src/app/modal-notificacao/modal-notificacao.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
  standalone: false,
})
export class CategoriaPage implements OnInit {

  categoria: string = '';
  receitas: any[] = [];

  constructor(private route: ActivatedRoute, 
              private menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private router: Router) {}

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

  ngOnInit() {
    // Pegando o parâmetro da rota (ex: "doces", "bebidas", etc.)
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      console.log('Categoria selecionada:', this.categoria);
      this.carregarReceitas();
    });
  }

  carregarReceitas() {
    const todasReceitas = [
      {
        id: 1,
        usuario: 'Elizabeth Bennet',
        fotoUsuario: '../../assets/images/perfil/Elizabeth.png',
        titulo: 'Lasanha à Bolonhesa',
        fotoReceita: '../../assets/images/receita/lasanha.png',
        descricao: 'Lasanha recheada com carne bovina e queijos.',
        avaliacao: 4,
        categoria: 'massas',
        quantAvaliacao: 4
      },
      {
        id: 2,
        usuario: 'Lars Lindstrom',
        fotoUsuario: '../../assets/images/perfil/lars.png',
        titulo: 'Escondidinho de Frango',
        fotoReceita: '../../assets/images/receita/escondidinho.png',
        descricao: 'Escondidinho de frango com batata.',
        avaliacao: 5,
        categoria: 'principal',
        quantAvaliacao: 30
      },
      {
        id: 3,
        usuario: 'Beatrix Kiddo',
        fotoUsuario: '../../assets/images/perfil/Beatrix.png',
        titulo: 'Mousse de Maracujá',
        fotoReceita: '../../assets/images/receita/mousseMaracuja.png',
        descricao: 'Mousse de maracujá com leite condensado.',
        avaliacao: 4,
        categoria: 'doces',
        quantAvaliacao: 45
      },
      {
        id: 4,
        usuario: 'Ellie Williams',
        fotoUsuario: '../../assets/images/perfil/ellie.png',
        titulo: 'Tacacá',
        fotoReceita: '../../assets/images/receita/tacaca.png',
        descricao: 'Caldo cremoso e picante, feito com tucupi, jambu, camarão seco e etc.',
        avaliacao: 5,
        categoria: 'principal',
        quantAvaliacao: 10
      },
      {
        id: 5,
        usuario: 'Vlad Dracula',
        fotoUsuario: '../../assets/images/perfil/dracula.png',
        titulo: 'Bolo Alagado',
        fotoReceita: '../../assets/images/receita/boloAlagado.png',
        descricao: 'Bolo alagado com calda de chocolate e cobertura de brigadeiro.',
        avaliacao: 3,
        categoria: 'doces',
        quantAvaliacao: 7
      },
      {
        id: 6,
        usuario: 'Fitzwilliam Darcy',
        fotoUsuario: '../../assets/images/perfil/darcy.png',
        titulo: 'Torta de Frango',
        fotoReceita: '../../assets/images/receita/tortaFrango.png',
        descricao: 'Torta salgada e fofinha de liquidificador com recheio de frango.',
        avaliacao: 3,
        categoria: 'massas',
        quantAvaliacao: 14
      },
      {
        id: 7,
        usuario: 'Red',
        fotoUsuario: '../../assets/images/perfil/red.png',
        titulo: 'Abobrinha Recheada',
        fotoReceita: '../../assets/images/receita/abobrinha.png',
        descricao: 'Abobrinha recheada com carne moída e queijo gratinado.',
        avaliacao: 4,
        categoria: 'acompanhamento',
        quantAvaliacao: 27
      },
      {
        id: 8,
        usuario: 'George Knightley',
        fotoUsuario: '../../assets/images/perfil/george.png',
        titulo: 'Sopa de Ervilha',
        fotoReceita: '../../assets/images/receita/sopaErvilha.png',
        descricao: 'Sopa de ervilha com bacon e costelinha defumada.',
        avaliacao: 3,
        categoria: 'principal',
        quantAvaliacao: 7
      },
      {
        id: 9,
        usuario: 'Calcifer',
        fotoUsuario: '../../assets/images/perfil/calcifer.png',
        titulo: 'Peixe Assado',
        fotoReceita: '../../assets/images/receita/filePeixe.png',
        descricao: 'File de peixe assado no forno com batatas.',
        avaliacao: 4,
        categoria: 'carnes',
        quantAvaliacao: 19
      },
      {
        id: 10,
        usuario: 'Beatrix Kiddo',
        fotoUsuario: '../../assets/images/perfil/Beatrix.png',
        titulo: 'Suco Verde',
        fotoReceita: '../../assets/images/receita/sucoVerde.png',
        descricao: 'Suco verde detox com couve e limão.',
        avaliacao: 5,
        categoria: 'bebidas',
        quantAvaliacao: 10
      },
      {
        id: 11,
        usuario: 'Beatrix Kiddo',
        fotoUsuario: '../../assets/images/perfil/Beatrix.png',
        titulo: 'Brownie de Chocolate',
        fotoReceita: '../../assets/images/receita/brownie.png',
        descricao: 'Brownie macio com sabor intenso de chocolate.',
        avaliacao: 4,
        categoria: 'doces',
        quantAvaliacao: 12
      },
      {
        id: 12,
        usuario: 'Beatrix Kiddo',
        fotoUsuario: '../../assets/images/perfil/Beatrix.png',
        titulo: 'Pudim',
        fotoReceita: '../../assets/images/receita/pudim.png',
        descricao: 'Pudim lisinho de leite condensado com calda de caramelo.',
        avaliacao: 5,
        categoria: 'doces',
        quantAvaliacao: 13
      },
      {
        id: 13,
        usuario: 'Beatrix Kiddo',
        fotoUsuario: '../../assets/images/perfil/Beatrix.png',
        titulo: 'Cuscuz',
        fotoReceita: '../../assets/images/receita/cuscuz.png',
        descricao: 'Cuscuz fofinho, perfeito para comer com manteiga.',
        avaliacao: 5,
        categoria: 'principal',
        quantAvaliacao: 50
      }
    ];

    // Filtrar receitas pela categoria recebida na rota
    this.receitas = todasReceitas.filter(r => r.categoria === this.categoria);
    console.log('Receitas filtradas:', this.receitas);
  }

  irParaCategoria(nomeCategoria: string) {
    this.router.navigate(['/tabs/categoria', nomeCategoria]);
  }
}

