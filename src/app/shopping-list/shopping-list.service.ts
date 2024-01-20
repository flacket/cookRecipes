import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Avena', 250),
    new Ingredient('Huevos', 2)
  ];

  constructor() { }

  getIngredientsList() {
    return this.ingredients;
  }
  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
