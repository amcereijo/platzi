import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiObservable {
  constructor(private http: Http) {}

  getCourses() {
    const url = '/data/info.json'
    return this.http.get(url)
      .map((response: Response) => response.json())
  }
}