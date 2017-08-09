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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TwitterNavbar = (function () {
    function TwitterNavbar() {
    }
    TwitterNavbar = __decorate([
        core_1.Component({
            selector: "twitter-navbar",
            template: "\n    <nav class=\"navbar navbar-default\">\n   <div class=\"container-fluid\">\n      <navbar-header>\n      </navbar-header>\n      <navbar-collapse>\n      </navbar-collapse>\n   </div>\n   <!-- /.container-fluid -->\n</nav>\n      \n    "
        }),
        __metadata("design:paramtypes", [])
    ], TwitterNavbar);
    return TwitterNavbar;
}());
exports.default = TwitterNavbar;
//# sourceMappingURL=twitterNavbar.js.map