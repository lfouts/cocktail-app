import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) {}
  createRating(drinkID, rating) {
    return this.http.post('/ratings', {
      drinkID: drinkID,
      rating: rating,
    });
  }
}
