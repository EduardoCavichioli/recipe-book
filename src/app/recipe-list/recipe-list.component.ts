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
  alert: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.alert = '';
    let id = Number(this.route.snapshot.paramMap.get('id'));
    //TODO change to api GET
    if (id) {
      let filteredList = this.recipes.filter((recipe) => {
        return recipe.id === id;
      });
      if (filteredList.length > 0) {
        this.selectedRecipe = filteredList[0];
      } else {
        this.alert = 'Invalid ID as parameter'
      }
    } 
  }

  onSelect(recipe: Recipe) : void {
    this.selectedRecipe = (recipe !== this.selectedRecipe) ? recipe : null;
  }

}
