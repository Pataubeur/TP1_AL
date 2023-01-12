import { Injectable } from '@angular/core';
const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const IS_LOGGED_IN = 'isLoggedIn';
const IS_LOGGED = 'true';
const FORM_USER = '0';
const FROM_ASSO = '0';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  public clear(): void {
    localStorage.clear();
  }
  public save(token: string, username: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY );
    localStorage.removeItem(IS_LOGGED_IN);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(IS_LOGGED_IN, IS_LOGGED);
  }
  public saveClickedUser(username: string): void {
    localStorage.removeItem(FORM_USER);
    localStorage.setItem(FORM_USER, username);
  }
  public saveClickedAssociation(username: string): void {
    localStorage.removeItem(FROM_ASSO);
    localStorage.setItem(FROM_ASSO, username);
  }
  public getToken(): string {
    const token = localStorage.getItem(TOKEN_KEY);
    return token === null ? '' : token;
  }
  public isLogged(): boolean {
    return (Boolean)(localStorage.getItem(IS_LOGGED_IN));
  }
  public getName(): string {
    const name = localStorage.getItem(USERNAME_KEY);
    return name === null ? '' : name;
  }
  public getClickedUser(): string {
    const name = localStorage.getItem(FORM_USER);
    return name === null ? '' : name;
  }
  public getClickedAssociation(): string {
    const name = localStorage.getItem(FROM_ASSO);
    return name === null ? '' : name;
  }
}
