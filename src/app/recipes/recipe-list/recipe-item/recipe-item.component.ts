import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = new Recipe('','','');

  constructor (private RecipeService: RecipeService) {}

  onSelected() {
    this.RecipeService.recipeSelected.emit(this.recipe);
  }
}
