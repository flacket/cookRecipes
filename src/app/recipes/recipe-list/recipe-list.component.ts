import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor (private RecipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }
}
