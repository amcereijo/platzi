import { Component, OnInit } from '@angular/core';
import { Course } from '../common/course';
import { ApiService } from '../services/api.service';
import { ApiObservable } from '../services/api.observable';
import { AuthService } from '../services/auth.service';

@Component({
  providers: [ ApiService, AuthService, ApiObservable ],
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    <div class="courses_list">
      <coursebox [course]="course_info"
      *ngFor="let course_info of courses"></coursebox>
    </div>
    <cart></cart>
  `
})

export class CoursesComponent implements OnInit{
  title : string = 'Cursos disponibles'
  courses : Course[];

  constructor(private apiService : ApiService,
    private authService :AuthService,
    private apiObservable: ApiObservable) {}

  getCourses () {
    // this.apiService.getCourses().then(
    //   courses => this.courses = courses
    // )
    this.apiObservable.getCourses().subscribe(
      data => this.courses = data,
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.getCourses();
    this.authService.check();
  }

}