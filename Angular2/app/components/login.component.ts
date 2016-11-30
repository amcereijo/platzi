import { Component } from '@angular/core';

import { AuthService, User } from '../services/auth.service';

@Component({
  providers: [AuthService],
  selector: 'login-form',
  template: `
    <p>La tienda es privada</p>
    <form (ngSubmit)="login()" #loginForm="ngForm">
      <div *ngIf="error" class="error">
        {{error}}
      </div>
      <label>Email:</label>
      <input type="text" required autocomplete="off"
        [(ngModel)] = "user.email"
        name="email"
        placeholder="Email">
      <label> Contraseña </label>
      <input type="password"
        required
        [(ngModel)]="user.password"
        name="password"
        placeholder="Tu contraseña">
      <button type="submit">Ingresar</button>
    </form>
  `
})

export class LoginComponent {
  user: User;
  error: String;
  constructor(private authService : AuthService) {
    this.user = { email: null, password: null };
  }

  login() {
    if(!this.authService.login(this.user)) {
      this.error = 'Contraseña incorrecta';
    }
  }
}