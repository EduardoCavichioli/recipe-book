import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  readonly: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.readonly = true;
  }

  copyToClipboard() {
    let url = this.router.url;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    //TODO fix to full url, not relative
    selBox.value = url.includes(String(this.recipe.id)) ? url : url + '/' + this.recipe.id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
