import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  drinks: any;

  constructor(private DrinkService: DrinkService, private RatingService: RatingService) { }

  ngOnInit() {
    this.loadDrinks();
  }

  loadDrinks() {
    this.DrinkService.getDrinks().subscribe(drink => {
      this.drinks = drink;
      console.log(drink);
    })
  }

  onChange(rating, drinkID) {
    this.RatingService.createRating(drinkID, rating).subscribe(rating => {
      console.log(rating);
      this.loadDrinks();
    })

  }

}
