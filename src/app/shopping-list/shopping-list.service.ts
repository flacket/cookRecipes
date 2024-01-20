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
    let notFound: boolean = true;

    for(let index = 0; index < this.ingredients.length; index++) {
      if(this.ingredients[index].name === newIngredient.name){
        this.ingredients[index].amount += newIngredient.amount;
        notFound = false;
      }
    }
    if (notFound) this.ingredients.push(newIngredient);
  }
}
