import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Arroz", 200),
    new Ingredient("Macarrao", 500),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredients(ingredient: Ingredient){
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

}
