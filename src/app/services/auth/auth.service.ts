import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs'
import { UserToken } from '../../shared/user.token';

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserToken>(null)

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDH0Dk6-prIn3d8_Xo4KEn6cVbmyDoYYw0',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).
    pipe(catchError(this.handleError),
      tap(res=>{
        this.handleAuth(
          res.email, res.localId, res.idToken, +res.expiresIn
        )
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDH0Dk6-prIn3d8_Xo4KEn6cVbmyDoYYw0',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError),
      tap(res=>{
        this.handleAuth(
          res.email, res.localId, res.idToken, +res.expiresIn
        )
      })
    )
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if(!userData){
      return;
    }

    const loadedUser = new UserToken(userData.email, userData.id, userData._token, userData._tokenExpirationDate)

    if(loadedUser.token) {
      this.user.next(loadedUser)
      return true
    }
    console.log(loadedUser);

  }

  private handleAuth(email, userId, token, expiresIn) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000)
    const userToken = new UserToken(
      email, userId, token, expDate
    )
    this.user.next(userToken)
    localStorage.setItem('userData', JSON.stringify(userToken))
  }

  private handleError(errorRes) {
    let errorMessage = 'An unknown error occurred!'

    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = 'This email already exists!'
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = 'This email does not exist!'
        break;
      case "INVALID_PASSWORD":
        errorMessage = 'This password is not correct!'
        break;
    }
    return throwError(errorMessage)
  }
}
