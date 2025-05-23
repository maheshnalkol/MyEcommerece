import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = `${environment.authurl}/api/auth`;

  private checkToken$: Subject<any> = new Subject();
  checkTokenstate: Observable<any> = this.checkToken$;
  passTokenstate: Observer<any> = this.checkToken$;
  constructor(private _http: HttpClient) {}

  signUpUSer(userDetails: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/register`, userDetails);
  }
  signInUSer(userDetails: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/login`, userDetails);
  }

  saveToken(token: string, userrole: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userrole', userrole);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
