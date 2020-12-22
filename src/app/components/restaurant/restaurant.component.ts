import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Input} from '@angular/core';
import {RestApiService} from '../../shared/rest-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Restaurants} from '../../shared/restaurants.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {LikeComponent} from '../childs/like/like.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @ViewChild(LikeComponent) viewchild: LikeComponent;
  private number: number;
  style = 'JetBrains Mono';
  textcolor = 'gray';
  textsize = '32px';
  Restaurant: any = [];
  rest: Restaurants;
  Reviews: any = [];
  @Input() newReview = {name: '', rev: ''};
  newName: FormControl = new FormControl('', Validators.required);
  newRev: FormControl = new FormControl('', Validators.required);
  reviewForm = new FormGroup({
    newName: this.newName,
    newRev: this.newRev
  });

  constructor(public restApi: RestApiService, private route: ActivatedRoute) { }
  a = false;
  b = true;
  ngOnInit(): void {
    this.loadRestaurants();
    this.loadReviews();
    console.log('AppComponent:OnInit');
    this.number = 0;
  }
  // tslint:disable-next-line:typedef
  loadRestaurants() {
    // return this.restApi.getRestaurants().subscribe( data => this.Restaurant = data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.restApi.getRestaurantsInfo(id)
      .subscribe(rest => this.rest = rest);
    // this.restApi.getRestaurantsInfo(this.id).subscribe(data => this.Restaurant = data);
  }

  addReview(dataReview) {
    this.restApi.newReview(this.newReview).subscribe((data: {}) => {});
    window.location.reload();
  }
  loadReviews() {
    return this.restApi.getReviews().subscribe(data => this.Reviews = data);
  }

  canDeactivate(): boolean | Observable<boolean>{
    if (this.reviewForm.valid || this.newName.valid || this.newRev.valid) {
      return confirm('Вы не сохранили данные. Вы уверены, что хотите покинуть страницу?');
    }
    else {
      return true;
    }
  }

  Destroy() {
    this.a = !this.a;
    this.b = !this.b;
  }

  get counter(){
    return this.number;
  }
  set counter(value) {
    this.number = value;
  }

  increment() {
    if (this.counter === 0) {
      this.counter++;
    }
    else {
      this.counter--;
    }
  }
}
