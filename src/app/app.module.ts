import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'about', component: AboutComponent},
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
