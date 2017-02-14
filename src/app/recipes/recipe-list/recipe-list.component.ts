import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Camarão no côco", "Camarões dentro do côco", "http://imagem.band.com.br/96/f_246696.jpg");
  constructor() {
    this.recipes.push(this.recipe);
   }

  ngOnInit() {
  }

}
