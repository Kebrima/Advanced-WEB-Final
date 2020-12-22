import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {SimpleChanges} from '@angular/core';
import {ViewChild} from '@angular/core';
import {LikeComponent} from '../childs/like/like.component';

@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.css']
})
export class HomecarouselComponent implements OnChanges, OnInit, DoCheck {
  style = 'JetBrains Mono';

  @ViewChild(LikeComponent) viewchild: LikeComponent;
  private number: number;

  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent:OnChanges');
  }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
    this.number = 0;
  }
  ngDoCheck() {
    console.log('AppComponent:DoCheck');
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
