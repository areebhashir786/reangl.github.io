import { Component, OnInit, Input } from '@angular/core';
// import the DataInterface as it will be used by our data-item

import { DataInterface } from '../../DataInterface';
@Component({
  selector: 'app-data-items',
  templateUrl: './data-items.component.html',
  styleUrls: ['./data-items.component.css'],
})
export class DataItemsComponent implements OnInit {
  @Input() item!: DataInterface; //!VS code and TScript version mismatch
  constructor() {}

  ngOnInit(): void {}
}
