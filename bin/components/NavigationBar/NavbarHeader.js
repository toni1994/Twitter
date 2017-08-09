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
var NavbarHeader = (function () {
    function NavbarHeader() {
    }
    NavbarHeader = __decorate([
        core_1.Component({
            selector: "navbar-header",
            template: "\n      <div class=\"navbar-header\">\n         <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\" aria-expanded=\"false\">\n         <span class=\"sr-only\">Toggle navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         </button>\n      </div>\n      \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarHeader);
    return NavbarHeader;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarHeader;
//# sourceMappingURL=navbarHeader.js.map