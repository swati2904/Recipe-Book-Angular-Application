import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test Recipe','Recipe desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F84264%2Frecipes.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F84264%2Frecipes&tbnid=TQfXrvpdON5ZKM&vet=12ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ..i&docid=JX6r1j1C-3tJkM&w=800&h=800&q=svg%20image%20of%20recipes&ved=2ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ'),
    new Recipe('A test Recipe','Recipe desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F84264%2Frecipes.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F84264%2Frecipes&tbnid=TQfXrvpdON5ZKM&vet=12ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ..i&docid=JX6r1j1C-3tJkM&w=800&h=800&q=svg%20image%20of%20recipes&ved=2ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ'),
    new Recipe('A test Recipe','Recipe desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F84264%2Frecipes.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F84264%2Frecipes&tbnid=TQfXrvpdON5ZKM&vet=12ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ..i&docid=JX6r1j1C-3tJkM&w=800&h=800&q=svg%20image%20of%20recipes&ved=2ahUKEwi159XMrb3qAhUT0HMBHes3CNIQMygBegUIARCtAQ')


  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
