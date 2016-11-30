"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var api_service_1 = require('../services/api.service');
var api_observable_1 = require('../services/api.observable');
var auth_service_1 = require('../services/auth.service');
var CoursesComponent = (function () {
    function CoursesComponent(apiService, authService, apiObservable) {
        this.apiService = apiService;
        this.authService = authService;
        this.apiObservable = apiObservable;
        this.title = 'Cursos disponibles';
    }
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        // this.apiService.getCourses().then(
        //   courses => this.courses = courses
        // )
        this.apiObservable.getCourses().subscribe(function (data) { return _this.courses = data; }, function (error) { return console.log(error); });
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
        this.authService.check();
    };
    CoursesComponent = __decorate([
        core_1.Component({
            providers: [api_service_1.ApiService, auth_service_1.AuthService, api_observable_1.ApiObservable],
            selector: 'courses',
            template: "\n    <h2>{{title}}</h2>\n    <div class=\"courses_list\">\n      <coursebox [course]=\"course_info\"\n      *ngFor=\"let course_info of courses\"></coursebox>\n    </div>\n    <cart></cart>\n  "
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, auth_service_1.AuthService, api_observable_1.ApiObservable])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map