import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  private nodeApiUrl: string = 'http://321z122.mars1.mars-hosting.com';
//   isLogged = false;
  isLoggedIn: Observable<any>;
  private isLoggedInSubject = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {
    this.isLoggedIn = this.isLoggedInSubject.asObservable()
    this.setIsLoggedIn(false);
  }

  login(username,password): Observable<any> {
    return this.httpClient
      .post<any>(`${this.nodeApiUrl}/api/login`, {
        username:username,
        password:password,
       
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'auth-token': this.getToken()
        }),
      })
      .pipe(catchError(this.handleError));
  }
  public setIsLoggedIn(value){
    this.isLoggedInSubject.next(value);
  }

  checkLogin

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    }
    if (errorResponse.status == 403) {
      return throwError(`${errorResponse.status}`);
    }
    if (errorResponse.status == 404) {
      return throwError(`${errorResponse.status}`);
    }
    if (errorResponse.status == 500) {
      return throwError(`${errorResponse.status}`);
    }
    return throwError(errorResponse);
  }
}
