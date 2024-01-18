import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAddIngredient (name:string, amount:string) {
    this.addIngredient.emit(new Ingredient(name, Number(amount)));
  }
}
