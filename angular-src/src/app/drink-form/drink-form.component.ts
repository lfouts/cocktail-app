import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.css']
})
export class DrinkFormComponent implements OnInit {
  model: Drink;
  @Output() loadDrinks = new EventEmitter() ;

  constructor(private DrinkService: DrinkService) {
    this.model = new Drink("", "");
  }

  ngOnInit() {
  }

  onSubmit() {
    this.DrinkService.createDrink(this.model).subscribe(drink => {
      console.log(drink);
      this.model = new Drink ("", "");
    this.loadDrinks.emit();
    });
  }

}
