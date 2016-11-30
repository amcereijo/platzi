import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  providers: [ AuthService ],
  selector: 'welcome',
  template:'<h2> Bienvenido</h2>'
})
export class WelcomeComponent implements OnInit{
  constructor(private authService : AuthService) {}

  ngOnInit() {
    this.authService.check();
  }
}