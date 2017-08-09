"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var twitterNavbar_1 = require("./components/navigationBar/twitterNavbar");
var navbarHeader_1 = require("./components/navigationBar/navbarHeader");
var navbarCollapse_1 = require("./components/navigationBar/navbarCollapse");
var profilePanel_1 = require("./components/profileColumn/profilePanel");
var tweetContainer_1 = require("./components/tweetColumn/tweetContainer");
var tweetInput_1 = require("./components/tweetColumn/tweetInput");
var followPanel_1 = require("./components/followColumn/followPanel");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule.forRoot()],
            declarations: [app_component_1.AppComponent, twitterNavbar_1.default, navbarHeader_1.default, navbarCollapse_1.default, profilePanel_1.default, tweetContainer_1.default, tweetInput_1.default, followPanel_1.default],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map