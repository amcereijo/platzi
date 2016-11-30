import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'my-app',
  template: `
    <header>
      Cursos Platzi
      <div class="user_bar">
        <a *ngIf="!authService.sessioin" routerLink="login">Iniciar sesion</a>
        <a *ngIf="authService.session" (click)="logout()">Cerrar sesion</a>
      </div>
    </header>
    <nav>
      <a routerLink="">Inicio</a>
      <a routerLink="courses">Courses</a>
    </nav>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  providers: [CartService, AuthService]

})
export class AppComponent implements OnInit{
  user: boolean;

  constructor(private authService : AuthService) {}

  ngOnInit() {

  }

  logout() {}
};