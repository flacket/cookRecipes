import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  newIngredient = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required)
  });

  constructor(
    private ShoppingListService: ShoppingListService
  ) {}

  onSubmit () {
    console.log(this.newIngredient.value);
    alert(`Nombre: ${this.newIngredient.value.name}
Cantidad: ${this.newIngredient.value.amount}`);
    //let item = new Ingredient(this.newIngredient.value.name, this.newIngredient.value.amount);
    //this.ShoppingListService.addIngredient(item);
  }
}
