import { Component, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe = new Recipe('','','', []);

  constructor(private ShoppingListService: ShoppingListService) {}

  onAddShoppingList() {
    this.recipe.ingredients.forEach(item => {
      this.ShoppingListService.addIngredient(item);
    });
  }
}
