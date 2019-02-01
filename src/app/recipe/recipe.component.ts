import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPE } from '../recipe-mock';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe = RECIPE;

  constructor() { }

  ngOnInit() {
  }

}
