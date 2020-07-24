import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients:Ingredient[] = [];
    // new Ingredient('Apples',5),
    // new Ingredient('Tomatoes',10),
    private igChangeSub: Subscription;
  
  constructor(private slService: ShoppingListService) { 

  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
        );
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
  
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
