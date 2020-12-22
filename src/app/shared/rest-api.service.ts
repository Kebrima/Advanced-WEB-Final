import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurants} from './restaurants.model';
import {Reviews} from './restaurants.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl = 'http://localhost:3000/restaurants/';
  reviewsUrl = 'http://localhost:3000/reviews';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurants> {
    return this.http.get<Restaurants>(this.apiUrl);
  }

  getRestaurantsInfo(id): Observable<Restaurants> {
  return this.http.get<Restaurants>(this.apiUrl + id);
}

  getReviews(): Observable<Reviews> {
    return this.http.get<Reviews>(this.reviewsUrl);
  }

  newReview(newRev): Observable<Reviews> {
    return this.http.post<Reviews>(this.reviewsUrl, JSON.stringify(newRev), this.httpOptions);
  }
}
