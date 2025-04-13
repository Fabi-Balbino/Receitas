import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: false,
})
export class RecipeCardComponent  implements OnInit {

  constructor(private navCtrl: NavController){}

  @Input() receita: any;

  @Input() userName!: string;
  @Input() userImage!: string;
  @Input() recipeTitle!: string;
  @Input() recipeImage!: string;
  @Input() recipeDescription!: string;
  @Input() recipeRating?: number;
  @Input() rating!: number;
  @Input() id!: number;
  
  irParaDetalhes() {
    if (!this.id) {
      console.warn('Receita sem ID');
      return;
    }
    this.navCtrl.navigateForward(`/tabs/detalhe-receita/${this.id}`);
  }

  ngOnInit() {}

  favorito: boolean = false;

  stars = Array(5).fill(0);

  toggleFavorito() {
    this.favorito = !this.favorito;
  }

  setRating(value: number) {
    this.rating = value;
  }

}
