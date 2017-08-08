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
var NavbarCollapse = (function () {
    function NavbarCollapse() {
    }
    NavbarCollapse = __decorate([
        core_1.Component({
            selector: "navbar-collapse",
            template: "\n      <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n         <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Naslovnica <i class=\"fa fa-home fa-lx\" aria-hidden=\"true\"></i> </a></li>\n            <li><a href=\"#\">Obavijesti <i class=\"fa fa-bell fa-lx\" aria-hidden=\"true\"></i> </a></li>\n            <li><a href=\"#\">Poruke <i class=\"fa fa-envelope fa-lx\" aria-hidden=\"true\"></i> </a></li>\n         </ul>\n         <ul class=\"nav navbar-nav navbar-right\">\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n               <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n               </div>\n               <button id=\"searchIcon\" type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n            </form>\n            <li class=\"dropdown\" id=\"myProfil\">\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Profile <i class=\"fa fa-user\" aria-hidden=\"true\"></i>  <span class=\"caret\"></span></a>\n               <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Moj profil</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Popisi</a></li>\n                  <li><a href=\"#\">Aktualni doga\u0111aji</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Pomo\u0107</a></li>\n                  <li><a href=\"#\">Tikovni pre\u010Daci</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Postvake</a></li>\n                  <li><a href=\"#\">Odjava</a></li>\n               </ul>\n            </li>\n            <button type=\"submit\" class=\"btn btn-primary navbar-btn\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Tweet</button>\n         </ul>\n      </div>  \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarCollapse);
    return NavbarCollapse;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarCollapse;
//# sourceMappingURL=navbarCollapse.js.map