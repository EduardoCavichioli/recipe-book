import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../recipe-mock';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = RECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) : void {
    this.selectedRecipe = recipe;
  }

}
