import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string,
  password: string
}

const USERS = [
  { email: 'user@gmail.com', password: '123456'},
  { email: 'admin@gmail.com', password: '789'},
]

@Injectable()
export class AuthService {
  users : User [] = USERS;
  session : boolean = false;

  constructor(private router : Router) {
  }

  redirect() {
    let link = ['/login'];
    this.router.navigate(link);
  }

  logout() {
     this.session = false;
     localStorage.removeItem('user');
     this.redirect();
  }

  login(user: User) {
    let userExist = this.users.find((u) => u.email == user.email);
    if(userExist && userExist.password === user.password) {
      localStorage.setItem('user', JSON.stringify(userExist));
      this.session = true;
      let link = ['/'];
      this.router.navigate(link);
    }
  }

  check() {
    if(localStorage.getItem('user') === null) {
      this.session = false;
      this.redirect();
    } else{
      this.session = true;
    }
  }

  getSession() {
    return this.session;
  }

  useR() {
    return localStorage.getItem('user');
  }
}