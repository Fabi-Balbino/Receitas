import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.page.html',
  styleUrls: ['./detalhe-receita.page.scss'],
  standalone: false
})
export class DetalheReceitaPage implements OnInit {

  receitaId!: string;
  receita: any;

  receitas = [
    {
      id: '1',
      titulo: 'Lasanha à bolonhesa',
      descricao: 'Lasanha recheada com carne bovina e queijos.',
      imagem: 'assets/images/receita/lasanha.png',
      tempo: '40 min',
      porcao: '4 porções',
      avaliacao: 4,
      ingredientes: [
        '1/2 pacote (200 g) de massa',
        '400 g de carne bovina moída',
        '1 fio de azeite',
        '2 latas de tomates pelados picados (800g)',
        '1 colher (chá) (6 g) de sal',
        '300 g de queijo muçarela fatiado',
        '300 g de queijo provolone fatiado',
        '100 g de queijo parmesão',
      ],
      preparo: [
        'Coloque o azeite e carne moída na panela, doure.',
        'Adicione tomate pelado e sal, cozinhe por 10 min.',
        'Monte com massa, molho e queijos.',
        'Finalize com parmesão e leve ao forno por 20 min a 200°C.'
      ],
      autor: {
        nome: 'Elizabeth Bennet',
        imagem: 'assets/images/perfil/Elizabeth.png',
      },
    },
    {
      id: '2',
      titulo: 'Escondidinho de Frango',
      descricao: 'Escondidinho de frango com batata.',
      imagem: '../../assets/images/receita/escondidinho.png',
      tempo: '60 min',
      porcao: '8 porções',
      avaliacao: 30,
      ingredientes: [
        '2 peitos de frango desfiado',
        '2 latas de molho de tomate pronto',
        '1 cebola pequena bem picadinha',
        '1 colher (sopa) bem cheia de margarina',
        '1 embalagem grande de requeijão (embalagem para culinária)',
        'pimenta a gosto',
        '1 lata de milho verde',
        '1 dente de alho',
        '1 kg de batata',
        '500 g de mussarela ralada',
        'sal a gosto',
      ],
      preparo: [
        'Desfie o frango e separe.',
        'Em uma panela de boca larga refogue a margarina, a cebola e o alho.',
        'Acrescente o frango e misture bem.',
        'Coloque o molho, o tempero pronto em pó, a pimenta, o sal e mexa bem.',
        'No final acrescente o milho, mexa e reserve.',
        'Faça um purê com as batatas.',
        'Em uma assadeira (4 dedos de altura) coloque o frango, o requeijão, o purê e por cima para completar a mussarela.',
        'Leve a assadeira grande e alta para o forno preaquecido.',
        'Deixe o queijo gratinar em fogo médio.',
        'Está pronto.'
      ],
      autor: {
        nome: 'Lars Lindstrom',
        imagem: '../../assets/images/perfil/lars.png',
      },
    },
    {
      id: '3',
      titulo: 'Mousse de Maracujá',
      descricao: 'Mousse de maracujá com leite condensado.',
      imagem: '../../assets/images/receita/mousseMaracuja.png',
      tempo: '5 min',
      porcao: '6 porções',
      avaliacao: 45,
      ingredientes: [
        '1 lata de leite condensado',
        '1 lata de creme de leite sem soro',
        '1 lata de suco de maracujá (medida pela lata de leite condensado)',
      ],
      preparo: [
        'Em um liquidificador, bata o creme de leite, o leite condensado e o suco concentrado de maracujá.',
        'Em uma tigela, despeje a mistura e leve à geladeira por, no mínimo, 4 horas.',
      ],
      autor: {
        nome: 'Beatrix Kiddo',
        imagem: '../../assets/images/perfil/Beatrix.png',
      },
    },
    {
      id: '4',
      titulo: 'Tacacá',
      descricao: 'Caldo cremoso e picante, feito com tucupi, jambu, camarão seco e etc.',
      imagem: '../../assets/images/receita/tacaca.png',
      tempo: '60 min',
      porcao: '6 porções',
      avaliacao: 10,
      ingredientes: [
        '4 xícaras (chá) de água',
        '1 colher (chá) de sal',
        '4 folhas de chicória',
        '3 pimentas-de-cheiro',
        '2 litros de tucupi',
        '1/2 xícara (chá) de polvilho azedo (ou goma de mandioca)',
        '500 g de camarão salgado (seco)',
        '4 dentes de alho bem amassados',
        '2 maços de jambu',
      ],
      preparo: [
        'Coloque o tucupi em uma panela com o alho bem amassado, o sal, a chicória e as pimentas.',
        'Leve ao fogo.',
        'Quando começar a ferver, abaixe o fogo, tampe a panela e deixe cozinhar por 30 minutos aproximadamente.',
        'Simultaneamente em outra panela, cozinhe o jambu até ficar tenro.',
        'Retire do fogo, escorra e reserve.',
        'Lave bem os camarões e leve-os ao fogo em uma panela com 4 xícaras de água.',
        'Deixe ferver por aproximadamente 5 minutos.',
        'Retire a cabeça e a casca.',
        'Em uma panela, misture o polvilho com a água dos camarões, leve ao fogo e mexa até obter um mingau.',
        'Sirva em uma cuia com uma concha de tucupi, um pouco do mingau, algumas folhas de jambu e os camarões.'
      ],
      autor: {
        nome: 'Ellie Williams',
        imagem: '../../assets/images/perfil/ellie.png',
      },
    },
    {
      id: '5',
      titulo: 'Bolo Alagado',
      descricao: 'Bolo alagado com calda de chocolate e cobertura de brigadeiro.',
      imagem: '../../assets/images/receita/boloAlagado.png',
      tempo: '60 min',
      porcao: '15 porções',
      avaliacao: 7,
      ingredientes: [
        '1 lata ou 395 gramas de leite condensado',
        '1 lata ou 300 gramas de creme de leite com soro',
        '60 mililitros de leite. Ou use um quarto de xícara de chá',
        '100 gramas ou 1 xícara de chá de leite em pó',
        '70 gramas de chocolate em pó 50% peneirado. Ou use três quartos de xícara de chá',
        '1 lata ou 395 gramas de leite condensado',
        '1 colher de sopa ou 15 gramas de manteiga',
        '40 gramas de chocolate em pó 50% peneirado',
        '200 gramas de creme de leite de caixinha',
        '140 gramas ou 1 xícara de chá de farinha de trigo',
        '45 gramas ou meia xícara de chá de chocolate em pó 50% peneirado',
        '1 colher de café de fermento em pó',
        '6 ovos',
        '135 gramas ou três quartos de xícara de chá de açúcar',
        'Confeitos a gosto para decoração',
      ],
      preparo: [
        'Em uma tigela coloque 1 lata de leite condensado, 1 lata de creme de leite com soro, 60 mililitros de leite, 100 gramas de leite em pó e 70 gramas de chocolate em pó 50% peneirado. Misture bem com um batedor de arame e reserve para a montagem.',
        'Coloque em uma panela 1 lata de leite condensado, 1 colher de sopa de manteiga e 40 gramas de chocolate em pó 50% peneirado. Misture bem e leve em fogo médio por mais ou menos 12 minutos mexendo sempre.',
        'Depois, adicione 200 gramas de creme de leite de caixinha e deixe em fogo médio por mais 8 minutos, mexendo sempre.',
        'Retire do fogo, deixe esfriar e reserve para montagem.',
        'Em uma tigela, coloque 140 gramas de farinha de trigo, 45 gramas de chocolate em pó 50% peneirado e 1 colher de café de fermento em pó. Misture bem e reserve esta mistura seca.',
        'Em uma batedeira, coloque 6 ovos e bata em velocidade alta por 5 minutos.',
        'Depois, diminua a velocidade e adicione 135 gramas de açúcar e bata por mais 5 minutos.',
        'Retire da batedeira e adicione, aos poucos, a mistura seca, delicadamente até obter uma massa homogênea.',
        'Transfira para uma forma redonda de 22 centímetros por 5 centímetros de altura, untada e forrada com papel-manteiga untado.',
        'Coloque no forno preaquecido em 180 graus Célsius por mais ou menos 50 minutos.',
        'Depois deste tempo, retire do forno, passe uma faquinha nas laterais e desenforme ainda quente em outra forma redonda um pouco maior, de 24 centímetros por 7 centímetros de altura.',
        'Descarte o papel-manteiga, fure o bolo ainda quente com 1 palito ou garfo e despeje a calda de chocolate quente, sobre todo o bolo. Cubra com papel-filme e leve à geladeira por, no mínimo, 4 horas.',
        'Retire o bolo da geladeira, descarte o papel-filme e com a ajuda de uma espátula distribua a cobertura de brigadeiro sobre o bolo, cobrindo toda a superfície. Decore com os confeitos e sirva.',
      ],
      autor: {
        nome: 'Vlad Dracula',
        imagem:'../../assets/images/perfil/dracula.png',
      },
    },
    {
      id: '6',
      titulo: 'Torta de Frango',
      descricao: 'Torta salgada e fofinha de liquidificador com recheio de frango.',
      imagem: '../../assets/images/receita/tortaFrango.png',
      tempo: '40 min',
      porcao: '15 porções',
      avaliacao: 14,
      ingredientes: [
        '500 g de peito de frango sem pele',
        '4 colheres (sopa) de óleo',
        '1 cebola picada',
        '1 xícara (chá) de ervilhas',
        'pimenta-do-reino a gosto',
        '1/2 litro de caldo de galinha',
        '1 dente de alho amassado',
        '3 tomates sem pele e sem sementes',
        'sal a gosto',
        '250 ml de leite',
        '2 ovos',
        'sal a gosto',
        'queijo ralado a gosto',
        '3/4 de xícara (chá) de óleo',
        '1 e 1/2 xícara (chá) de farinha de trigo',
        '1 colher (sopa) de fermento em pó'
      ],
      preparo: [
        'Cozinhe o peito de frango no caldo até ficar macio.',
        'Separe 1 xícara (chá) de caldo do cozimento e reserve.',
        'Refogue os demais ingredientes e acrescente as ervilhas por último.',
        'Desfie o frango, misture ao caldo e deixe cozinhar até secar.',
        'Bata o leite, o óleo e os ovos no liquidificador em velocidade baixa.',
        'Acrescente aos poucos a farinha, o sal e o fermento.',
        'Despeje metade da massa em uma forma untada e adicione o recheio sobre ela.',
        'Cubra com o restante de massa e o queijo ralado.',
        'Leve ao forno preaquecido (180° C) até dourar.'
      ],
      autor: {
        nome: 'Fitzwilliam Darcy',
        imagem:'../../assets/images/perfil/darcy.png',
      },
    },
    {
      id: '7',
      titulo: 'Abobrinha Recheada',
      descricao: 'Abobrinha recheada com carne moída e queijo gratinado.',
      imagem: '../../assets/images/receita/abobrinha.png',
      tempo: '40 min',
      porcao: '8 porções',
      avaliacao: 27,
      ingredientes: [
        '4 abobrinhas médias',
        '2 dentes de alho amassados',
        '100 g de bacon picado',
        '50 g de queijo parmesão ralado',
        'Sal',
        '1 cebola picada',
        '300 g de carne moída',
        '2 tomates picados',
        'Cheiro verde',
        'Pimenta-do-reino'
      ],
      preparo: [
        'Corte as abobrinhas ao meio, no sentido do comprimento.',
        'Tire cuidadosamente a polpa e reserve.',
        'Cozinhe as abobrinhas em água fervente com sal.',
        'Prepare o recheio, refogue a cebola e o alho com um pouco de óleo.',
        'Acrescente o bacon e deixe fritar bem.',
        'Adicione a carne moída, a pimenta-do-reino e o sal.',
        'Deixe fritar bem.',
        'Acrescente o tomate e a polpa picada da abobrinha.',
        'Deixe apurar.',
        'Por último, salpique um pouco de cheiro verde.',
        'Recheie as abobrinhas com a carne moída.',
        'Salpique o queijo ralado sobre as abobrinhas e leve ao forno para gratinar.'
      ],
      autor: {
        nome: 'Red',
        imagem: '../../assets/images/perfil/red.png',
      },
    },
    {
      id: '8',
      titulo: 'Sopa de Ervilha',
      descricao: 'Sopa de ervilha com bacon e costelinha defumada.',
      imagem: '../../assets/images/receita/sopaErvilha.png',
      tempo: '35 min',
      porcao: '6 porções',
      avaliacao: 7,
      ingredientes: [
        '500 g de ervilha desidratada (de pacote)',
        '300 g de costelinha defumada',
        '3 colheres de óleo',
        '300 g de bacon',
        '1 cebola bem picada',
      ],
      preparo: [
        'Na panela de pressão coloque o óleo, refogue a cebola e frite o bacon.',
        'Deixe fritar bem o bacon até sair toda a gordura.',
        'Após o bacon bem frito, acrescente a costelinha defumada e refogue um pouco.',
        'Depois coloque a ervilha e encha a panela de água abaixo da marca do cabo da panela.',
        'Cozinhe de 25 a 30 minutos.',
        'Após cozida, mexa para dissolver os pedaços de ervilha que restaram.',
        'É melhor servi-la com pão murcho do que com torrada.',
      ],
      autor: {
        nome: 'George Knightley',
        imagem: '../../assets/images/perfil/george.png',
      },
    },
    {
      id: '9',
      titulo: 'Peixe Assado',
      descricao: 'File de peixe assado no forno com batatas.',
      imagem: '../../assets/images/receita/filePeixe.png',
      tempo: '25 min',
      porcao: '4 porções',
      avaliacao: 19,
      ingredientes: [
        '1/2 kg de filé de peixe',
        '1 cebola',
        'Pimenta-do-reino ou qualquer uma da sua preferência',
        'Vinagre',
        '1/2 pote de azeitonas picadas',
        'Molho de tomate',
        'Sal a gosto',
        '1/2 pimentão',
        '1/2 limão',
        'Azeite',
        'Batatas cozidas cortadas em rodelas',
        '200 g de mussarela'
      ],
      preparo: [
        'Em uma travessa média coloque um pouco de azeite e cubra o fundo com as batatas cozidas, cortadas em rodelas.',
        'Tempere os filés de peixe com sal e pimenta a gosto, coloque o suco do limão para retirar o cheiro forte do peixe e um pouco de vinagre.',
        'Coloque os filés sobre as batatas e corte a cebola e o pimentão.',
        'Jogue o molho de tomate em cima e leve ao forno por 15 minutos.',
        'Retire, coloque a mussarela, leve ao forno novamente para gratinar.',
        'Sirva com arroz branco.'
      ],
      autor: {
        nome: 'Calcifer',
        imagem: '../../assets/images/perfil/calcifer.png',
      },
    },
    {
      id: '10',
      titulo: 'Suco Verde',
      descricao: 'Suco verde detox com couve e limão.',
      imagem: '../../assets/images/receita/sucoVerde.png',
      tempo: '10 min',
      porcao: '1 porções',
      avaliacao: 10,
      ingredientes: [
        '1 folha grande de couve',
        '1 maçã',
        'gengibre a gosto',
        '1 colher de sopa de linhaça',
        '250 ml de água',
        '1 limão',
        '1/2 pepino',
        'hortelã a gosto',
        '1 colher de sopa de mel',
      ],
      preparo: [
        'Junte todos os ingredientes (com as cascas) no liquidificador.',
        'Bata e sirva imediatamente para que não se percam as vitaminas.',
        'Coar é opcional.',
        'Tome de preferencia pela manhã em jejum!',
      ],
      autor: {
        nome: 'Beatrix Kiddo',
        imagem: '../../assets/images/perfil/Beatrix.png',
      },
    },
    {
      id: '11',
      titulo: 'Brownie de Chocolate',
      descricao: 'Brownie macio com sabor intenso de chocolate.',
      imagem: '../../assets/images/receita/brownie.png',
      tempo: '40 min',
      porcao: '8 porções',
      avaliacao: 12,
      ingredientes: [
        '6 colheres (sopa) bem cheias, de margarina sem sal',
        '1/2 xícara (chá) chocolate em pó',
        '2 xícaras (chá) açúcar',
        '2 pitadas de sal',
        '1 tablete de chocolate meio amargo picado em cubinhos',
        '3/4 xícara (chá) achocolatado',
        '1 e 1/4 xícara (chá) farinha de trigo',
        '4 ovos',
        '1 colher (chá) de extrato ou essência de baunilha',
        '1/2 xícara (chá) de nozes picadas ou castanhas de caju granuladas',
      ],
      preparo: [
        'Misture os ovos e o açúcar.',
        'Em seguida, agregue todos os outros ingredientes até formar um creme uniforme.',
        'Despeje em uma assadeira, forrada com papel-manteiga e leve ao forno médio por 40 minutos.',
        'O brownie estará pronto quando a parte de cima estiver levemente corada e, ao se espetar um palito, ele esteja levemente úmido (devido ao chocolate derretido).',
        'Corte em quadrados ainda quente e sirva com uma bola de sorvete de creme, ou congele num saquinho para freezer.',
        'Para descongelar, coloque o brownie num prato de sobremesa e aqueça no micro-ondas, potência alta, por 1 minuto.'
      ],
      autor: {
        nome: 'Beatrix Kiddo',
        imagem: '../../assets/images/perfil/Beatrix.png',
      },
    },
    {
      id: '12',
      titulo: 'Pudim',
      descricao: 'Pudim lisinho de leite condensado com calda de caramelo.',
      imagem: '../../assets/images/receita/pudim.png',
      tempo: '65 min',
      porcao: '8 porções',
      avaliacao: 33,
      ingredientes: [
        '1 lata de leite condensado',
        '3 ovos inteiros',
        '1 lata de leite (medida da lata de leite condensado)',
        '1 xícara (chá) de açúcar',
        '1/2 xícara de água',
      ],
      preparo: [
        'Primeiro, bata bem os ovos no liquidificador.',
        'Acrescente o leite condensado e o leite, e bata novamente.',
        'Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.',
        'Coloque em uma forma redonda e despeje a massa do pudim por cima.',
        'Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.',
        'Espete um garfo para ver se está bem assado.',
        'Deixe esfriar e desenforme.'
      ],
      autor: {
        nome: 'Beatrix Kiddo',
        imagem: '../../assets/images/perfil/Beatrix.png',
      },
    },
    {
      id: '13',
      titulo: 'Cuscuz',
      descricao: 'Cuscuz fofinho, perfeito para comer com manteiga.',
      imagem: '../../assets/images/receita/cuscuz.png',
      tempo: '30 min',
      porcao: '3 porções',
      avaliacao: 50,
      ingredientes: [
        '1½ xícara (chá) de farinha de milho flocada',
        '1/2 colher (chá) de sal',
        '3/4 de xícara (chá) de água',
        '2 colheres (sopa) de manteiga',
      ],
      preparo: [
        'Numa tigela misture a farinha de milho com o sal. Regue com a água aos poucos, mexendo com uma colher para umedecer a farinha – a textura deve ficar como a de areia molhada, bem úmida. Deixe hidratar por 10 minutos – assim os flocos ficam mais macios ao cozinhar no vapor.',
        'Preencha o fundo da cuscuzeira com água e encaixe o cesto de vapor na panela. Transfira a farinha de milho hidratada para o cesto, sem compactar. Tampe e leve para cozinhar em fogo alto.',
        'Assim que começar a ferver, vai sair um leve vapor pela lateral da tampa. Abaixe o fogo e deixe cozinhar por mais 10 minutos até o cuscuz ficar bem macio. Verifique ao abrir a tampa: o cuscuz deve estar inflado macio ao toque.',
        'Desligue o fogo e, com cuidado para não se queimar ou virar o cesto, puxe a haste central para desenformar cuscuz. Transfira para uma tigela e desfaça o cuscuz em pedaços com um garfo.',
        'Numa tigela pequena misture a manteiga com ¼ de xícara (chá) da água fervente da cuscuzeira. Mexa com uma colher até derreter pelo menos a metade da manteiga – ela termina de derreter com o calor do cuscuz.',
        'Regue a água com manteiga sobre o cuscuz e misture com o garfo – a água com manteiga deixa o cuscuz mais úmido e saboroso. Sirva a seguir.'
      ],
      autor: {
        nome: 'Beatrix Kiddo',
        imagem: '../../assets/images/perfil/Beatrix.png',
      },
    },
  ];
  
  @Input() rating!: number;

  constructor(private route: ActivatedRoute,
              private menuCtrl: MenuController,
              private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.receitaId = this.route.snapshot.paramMap.get('id')!;
    this.receita = this.receitas.find(r => r.id === this.receitaId);
  }

  favorito: boolean = false;
  toggleFavorito() {
    this.favorito = !this.favorito; 
  }

  stars = Array(5).fill(0);
  setRating(value: number) {
    this.rating = value;
  }

  openMenu() {
    this.menuCtrl.open('customMenu');
  }
  voltar() {
    this.navCtrl.back();
  }

}
