import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../../DataInterface';
import { DATA } from '../../Data';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data: DataInterface[] = DATA;
  constructor() {}

  ngOnInit(): void {}
}
