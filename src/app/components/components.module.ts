import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [RecipeCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [RecipeCardComponent] // <- Permite usar o card em outros módulos
})
export class ComponentsModule {}
