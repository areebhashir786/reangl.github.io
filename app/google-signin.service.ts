import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSigninService {
  private auth2!: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '954485927764-so0aj065tmugm6ecb9040o5f03laci67.apps.googleusercontent.com',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:4200/data',
      });
    });
  }
  public signIn() {
    this.auth2
      .signIn({
        scope: 'https://www.googleapis.com/auth/gmail.readonly',
      })
      .then((user) => {
        this.subject.next(user);
      })
      .catch(() => {
        this.subject.next();
      });
  }
  public signOut() {
    this.auth2.signOut().then(() => {
      this.subject.next();
    });
  }
  public obserable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
