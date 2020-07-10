
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.module';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Turkey Burgers',
        'Ground turkey, or minced turkey, is a mixture of dark and light turkey meat with remaining skin and visible fat processed together until a "ground" form emerges. The turkey meat, skin, and fat is taken off the bone and processed with additives.',
        'http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613',
        [
            new Ingredient('Cheese slice', 1),
            new Ingredient('Diet Coke',  1),
            new Ingredient('CatchUp Sauce', 5)
        ]),
        new Recipe('Red Smoky Chicken',
        ' The meat was juicy, tender and really tasty. It does not taste like any of the fried chickens, instead it tastes more like roasted or rotisserie chicken',
        'https://b.zmtcdn.com/data/pictures/0/3000040/6fe1430338c71ee75baaee64b13fa807.jpg?output-format=webp',
        [
            new Ingredient('With French Fries', 10),
            new Ingredient('Black Current', 1)
        ]),
    ];

    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
}