import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Cheesecake',
      'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2015%2F02%2F11%2Fcheesecake-facil-con-leche-condensada-2000.jpg'
    ),
    new Recipe(
      'Galletas de Avena',
      'Son un tipo de galleta elaborado en base a la harina de trigo con el cereal de avena.',
      'https://mojo.generalmills.com/api/public/content/DghZOSz42kCwArruP2Z_IA_gmi_hi_res_jpeg.jpeg'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
