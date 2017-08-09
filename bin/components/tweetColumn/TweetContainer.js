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
var tweet_1 = require("./../../model/tweet");
var TweetContainer = (function () {
    function TweetContainer() {
        this.tweets = [
            new tweet_1.default("Toni Buzov", "@Tbuzov", 25, "Ovo je Tweet kul super", "http://www.motorward.com/wp-content/images/2016/04/Vorsteiner-BMW-M4-RACE-3.jpg", 3, 3, 3),
            new tweet_1.default("Mario Buzov", "@Mboban", 40, "Jeste spremni momci", "http://cdn.finirecepti.com/wp-content/uploads/2015/10/palacinke-1.jpg", 4, 5, 6)
        ];
    }
    TweetContainer = __decorate([
        core_1.Component({
            selector: "tweet-container",
            template: "\n      <div class=\"row TweetContainer\"  *ngFor=\"let tweet of tweets\">\n      <div class=\"col-md-1 LeftSide\">\n         <div class=\"row leftPictures\">\n            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" class=\"img-thumbnail profilSmall\" >\n         </div>\n      </div>\n      <div class=\"col-md-11 rightSide\">\n         <div class=\"row\">\n            <div class=\"panel panel-default text-left rSide\">\n               <div class=\"panel-heading\" id=\"panel-heading-tweet\">\n                  <a class=\"authorTweet\"><strong>{{tweet.tweetAuthor}}</strong> <label class=\"timeTweet\">{{tweet.tweetAuthorTag}} - {{tweet.tweetTime}}min</label></a>\n                  <p class=\"textOfTweet\">{{tweet.tweetText}}</p>\n               </div>\n               <div class=\"panel-body panel-body-tweet\">\n                  <img src={{tweet.tweetImageURL}} class=\"img-thumbnail tweetPicture\">\n               </div>\n               <div class=\"panel-footer panel-footer-tweet\">\n                  <i class=\"fa fa-reply fa-2x tweetIcon\" aria-hidden=\"true\"></i> <label class=\"numberIcone\">{{tweet.tweetReply}}</label>\n                  <i class=\"fa fa-level-up fa-2x tweetIcon\" aria-hidden=\"true\"></i> <label class=\"numberIcone\">{{tweet.tweetForward}}</label>\n                  <i class=\"fa fa-heart fa-2x tweetIcon heart\" aria-hidden=\"true\"></i> <label class=\"numberIcone\">{{tweet.tweetLove}}</label>\n                  <i class=\"fa fa-ellipsis-h fa-2x tweetIcon\" aria-hidden=\"true\"></i>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], TweetContainer);
    return TweetContainer;
}());
exports.default = TweetContainer;
//# sourceMappingURL=tweetContainer.js.map