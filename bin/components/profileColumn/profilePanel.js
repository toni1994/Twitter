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
var user_1 = require("./../../model/user");
var NavbarCollapse = (function () {
    function NavbarCollapse() {
        this.user = new user_1.default("Pero", "Boban", "@Mboban", "Croatia", "Split");
    }
    NavbarCollapse = __decorate([
        core_1.Component({
            selector: "profile-column",
            template: "\n      <div class=\"col-md-3\">\n   <div class=\"panel panel-default text-center\">\n      <div class=\"panel-heading\">\n         <h1>Profile</h1>\n         <div class=\"row\">\n            <div class=\"col-xs-6\">\n               <div class=\"big-box\">\n                  <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" class=\"img-thumbnail\" >\n               </div>\n            </div>\n            <div class=\"col-xs-6\">\n               <div class=\"row\">\n                  <div class=\"profile-text\"> Name:{{user.firstName}} {{user.lastName}}</div>\n                  <div class=\"profile-text\"> {{user.twitterTag}}</div>\n                  <div class=\"profile-text\"> Country:{{user.country}}</div>\n                  <div class=\"profile-text\"> City:{{user.city}}</div>\n               </div>\n            </div>\n         </div>\n      </div>\n      <div class=\"panel-body\">\n         <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-4\">\n               Tweetovi:\n               <div class=\"twitter_numbers\"> 4 </div>\n            </div>\n            <div class=\"col-xs-6 col-sm-4\">\n               Slijedim:\n               <div class=\"twitter_numbers\"> 22 </div>\n            </div>\n            <div class=\"clearfix visible-xs-block\"></div>\n            <div class=\"col-xs-6 col-sm-4\">\n               Pratitelji:\n               <div class=\"twitter_numbers\"> 36 </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   <div class=\"panel panel-default text-center\">\n      <div class=\"panel-body\">\n         <div class=\"\"><strong>Trendovi</strong></div>\n         <div class=\"hashtag_link\">\n            <strong>#TravelTuesday</strong>\n            <div class=\"tweet_info\"> \n               @Croatia_hr \u0161alje tweetove o toj temi \n            </div>\n         </div>\n         <div class=\"hashtag_link\">\n            <strong>#Hajduk1950</strong>\n            <div class=\"tweet_info\"> \n               @Hajduk_Split \u0161alje tweetove o toj temi \n            </div>\n         </div>\n         <div class=\"hashtag_link\">\n            <strong>#StrongLife</strong>\n            <div class=\"tweet_info\"> \n               @BodyBuilding \u0161alje tweetove o toj temi \n            </div>\n         </div>\n         <div class=\"hashtag_link\">\n            <strong>#CSGO Major</strong>\n            <div class=\"tweet_info\"> \n               @CSGO_LIFE \u0161alje tweetove o toj temi \n            </div>\n         </div>\n         <div class=\"hashtag_link\">\n            <strong>#Esport_Life</strong>\n            <div class=\"tweet_info\"> \n               @Esport_eu \u0161alje tweetove o toj temi \n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], NavbarCollapse);
    return NavbarCollapse;
}());
exports.default = NavbarCollapse;
//# sourceMappingURL=profilePanel.js.map