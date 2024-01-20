import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {

  constructor(private ShoppingListService: ShoppingListService) {}

  onAddIngredient (name:string, amount:string) {
    this.ShoppingListService.addIngredient(new Ingredient(name, Number(amount)));
  }
}
