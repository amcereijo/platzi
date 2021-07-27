"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const API_KEY = '123456789';
const API_KEY_PROD = 'asdsadsa';
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [
            {
                provide: 'API_KEY',
                useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
            },
        ],
        exports: ['API_KEY'],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map