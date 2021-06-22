// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { GoogleSigninService } from './google-signin.service';

// @Component({
//   selector: 'app-root', //this is the root where our code will be placed
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'], //our style sheet
// })
// export class AppComponent implements OnInit {
//   title = 'web-project';
//   user!: gapi.auth2.GoogleUser;
//   router: any;
//   constructor(
//     private signInService: GoogleSigninService,
//     private ref: ChangeDetectorRef
//   ) {}
//   ngOnInit(): void {
//     this.signInService.obserable().subscribe((user) => {
//       this.user = user;
//       this.ref.detectChanges();
//     });
//   }
//   signIn() {
//     this.signInService.signIn();
//   }
//   signOut() {
//     this.signInService.signOut();
//   }
// }

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { Component } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';

@Component({
  selector: 'app-root', //this is the root where our code will be placed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], //our style sheet
})
export class AppComponent {
  title = 'web-project';
}
