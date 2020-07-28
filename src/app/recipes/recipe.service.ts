
import {Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.module';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
   // recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Turkey Burgers',
        'Ground turkey, or minced turkey, is a mixture of dark and light turkey meat with remaining skin and visible fat processed together until a "ground" form emerges. The turkey meat, skin, and fat is taken off the bone and processed with additives.',
        'http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613',
        [
            new Ingredient('Cheese slice', 3),
            new Ingredient('Bun',  2),
            new Ingredient('Sauce', 5),
            new Ingredient('vegetable oil',1)
        ]),
        new Recipe('Fried Chicken',
        ' The meat was juicy, tender and really tasty. It does not taste like any of the fried chickens, instead it tastes more like roasted or rotisserie chicken',
        'https://b.zmtcdn.com/data/pictures/0/3000040/6fe1430338c71ee75baaee64b13fa807.jpg?output-format=webp',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Spices', 2),
            new Ingredient('Bread crums', 5),
            new Ingredient('corn flour', 2),
        ]),
    ];

    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}