import { Component, OnInit } from '@angular/core';
import {OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  a = false;
  b = true;
  today: number = Date.now();
  style = 'JetBrains Mono';
  constructor(public translate: TranslateService) { }


  ngOnInit(): void {
  }
  Destroy(){
    this.a = !this.a;
    this.b = !this.b;

  }
  ngOnDestroy(){
    console.log('ngOnDestroy executing');
    this.b = !this.a;
  }
}
