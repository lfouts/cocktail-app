import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get('/drinks');
  }
  createDrink(drink) {
    return this.http.post('/drinks', drink);
  }
}
