import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent implements OnInit {
  style = 'JetBrains Mono';
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
