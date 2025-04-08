import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: false,
})
export class RecipeCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() userName: string = '';
  @Input() userImage: string = '';
  @Input() recipeTitle: string = '';
  @Input() recipeImage: string = '';
  @Input() recipeDescription: string = '';
  @Input() rating: number = 0;

  favorito: boolean = false;

  stars = Array(5).fill(0);

  toggleFavorito() {
    this.favorito = !this.favorito;
  }

  setRating(value: number) {
    this.rating = value;
  }

}
