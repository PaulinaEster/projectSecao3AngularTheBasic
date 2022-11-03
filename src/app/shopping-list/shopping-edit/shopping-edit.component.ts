import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'], 
})
export class ShoppingEditComponent implements OnInit {


  @Output() eventAddIngredient = new EventEmitter<Ingredient>();

  ingredient: Ingredient = new Ingredient("tomate", 20);

  form = new FormGroup({
    name: new FormControl(" ", [Validators.required]),
    amount: new FormControl(0, [Validators.required])
  });



  constructor() { }

  ngOnInit(): void {
  }
  onEventAddIngredient(){
    this.ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    this.eventAddIngredient.emit(this.ingredient);
  }

}
