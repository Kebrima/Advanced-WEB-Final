import { Component, OnChanges, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnChanges, OnInit {
  @Input() myNewnumber: number;
  ngOnChanges(changes: SimpleChanges){
    if (this.myNewnumber === 1) {
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
