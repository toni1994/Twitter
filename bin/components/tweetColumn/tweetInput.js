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
var TweetInput = (function () {
    function TweetInput() {
    }
    TweetInput = __decorate([
        core_1.Component({
            selector: "tweet-input",
            template: "\n<div class=\"col-md-6\">\n   <div class=\"row\" id=\"newTweet\">\n      <div class=\"box profile-info n-border-top\">\n         <form>\n            <textarea class=\"form-control input-lg p-text-area\" rows=\"2\" placeholder=\"Whats in your mind today?\"></textarea>\n         </form>\n         <div class=\"box-footer box-form\">\n            <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"postButton\">Tweet</button>\n            <p class=\"pull-right maxLetter\">140</p>\n            <ul class=\"nav nav-pills\">\n               <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i></a></li>\n               <li><a href=\"#\"><i class=\"fa fa-camera\"></i></a></li>\n               <li><a href=\"#\"><i class=\" fa fa-film\"></i></a></li>\n               <li><a href=\"#\"><i class=\"fa fa-microphone\"></i></a></li>\n            </ul>\n         </div>\n      </div>\n   </div>\n   <!--THIS IS THE PART WHERE WE PUT IN TWEETS-->\n   <tweet-container>\n   </tweet-container>\n\n</div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], TweetInput);
    return TweetInput;
}());
exports.default = TweetInput;
//# sourceMappingURL=tweetInput.js.map