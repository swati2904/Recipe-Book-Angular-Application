import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('First Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613'),
    new Recipe('Another Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613'),
];
 constructor() { }
 ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
