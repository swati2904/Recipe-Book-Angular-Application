import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.module';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
//   recipes: Recipe[]=[
//     new Recipe('First Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613'),
//     new Recipe('Another Burger Recipe','Recipe desciption','http://www.fullhdwpp.com/wp-content/uploads/McDonalds_Burger.jpg?x69613'),
// ];

recipes: Recipe[];
subscription: Subscription;


 constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) { 

 }
 ngOnInit():void  {
  //  this.subscription = this.recipeService.recipeChanged
  //  .subscribe(
  //    (recipes: Recipe[]) =>{
  //      this.recipes = recipes;
  //    }
  //  );

   this.recipeService.recipeChanged
   .subscribe(
     (recipes: Recipe[]) => {
       this.recipes = recipes;
     }
   );
   this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
