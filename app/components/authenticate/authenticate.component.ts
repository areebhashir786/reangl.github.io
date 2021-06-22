// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-authenticate',
//   templateUrl: './authenticate.component.html',
//   styleUrls: ['./authenticate.component.css']
// })
// export class AuthenticateComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleSigninService } from '../../google-signin.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  title = 'web-project';
  user!: gapi.auth2.GoogleUser;
  router: any;
  constructor(
    private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.signInService.obserable().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
    });
  }
  signIn() {
    this.signInService.signIn();
  }
  signOut() {
    this.signInService.signOut();
  }
}
