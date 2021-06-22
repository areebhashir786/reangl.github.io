import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  email!: string;
  password!: string;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(`Email:${this.email},password: ${this.password}`);
  }
}
