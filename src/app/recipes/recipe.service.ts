import { Recipe } from './recipe.module';
import { EventEmitter } from '@angular/core';


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('First Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613'),
        new Recipe('Another Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}