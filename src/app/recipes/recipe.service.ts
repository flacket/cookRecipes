import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheesecake',
      'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2015%2F02%2F11%2Fcheesecake-facil-con-leche-condensada-2000.jpg',
      [
        new Ingredient('queso crema', 150),
        new Ingredient('tarta dulce', 1)
      ]
    ),
    new Recipe(
      'Galletas de Avena',
      'Son un tipo de galleta elaborado en base a la harina de trigo con el cereal de avena.',
      'https://mojo.generalmills.com/api/public/content/DghZOSz42kCwArruP2Z_IA_gmi_hi_res_jpeg.jpeg',
      [
        new Ingredient('avena', 250),
        new Ingredient('harina', 100),
        new Ingredient('huevo', 2)
      ]
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
