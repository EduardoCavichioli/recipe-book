import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    //TODO change to api GET
    if (id) {
      this.selectedRecipe = this.recipes.filter((recipe) => {
        return recipe.id === id;
      })[0];
    }
  }

  onSelect(recipe: Recipe) : void {
    this.selectedRecipe = recipe;
  }

}
