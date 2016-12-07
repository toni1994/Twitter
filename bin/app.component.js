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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Naslovnica <i class=\"fa fa-home fa-lx\" aria-hidden=\"true\"></i> </a></li>\n        <li><a href=\"#\">Obavijesti <i class=\"fa fa-bell fa-lx\" aria-hidden=\"true\"></i> </a></li>\n\t\t    <li><a href=\"#\">Poruke <i class=\"fa fa-envelope fa-lx\" aria-hidden=\"true\"></i> </a></li>  \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n\t  <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n\t  \n\t  <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n\t\t\n    \n       <button type=\"submit\" class=\"btn btn-primary\">Tweet</button>\n       \n        \n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<!--THIS IS THE LEFT COLUMN AKA PROFILE COLUMN-->\n\n<div class=\"col-md-3\">\n   <div class=\"panel panel-default text-center\">\n      <div class=\"panel-heading\">\n         <h1>Profile</h1>\n         <div class=\"row\">\n            <div class=\"col-xs-6\">\n               <div class=\"big-box\">\n                  <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" class=\"img-thumbnail\" >\n               </div>\n            </div>\n            <div class=\"col-xs-6\">\n               <div class=\"row\">\n                  <div class=\"profile-text\"> Name:Mario Boban</div>\n                  <div class=\"profile-text\"> @Mboban</div>\n                  <div class=\"profile-text\"> Country:Croatia</div>\n                  <div class=\"profile-text\"> City:Split</div>\n               </div>\n            </div>\n         </div>\n      </div>\n      <div class=\"panel-body\">\n         <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-4\">\n               Tweetovi:\n               <div class=\"twitter_numbers\"> 4 </div>\n            </div>\n            <div class=\"col-xs-6 col-sm-4\">\n               Slijedim:\n               <div class=\"twitter_numbers\"> 22 </div>\n            </div>\n            <div class=\"clearfix visible-xs-block\"></div>\n            <div class=\"col-xs-6 col-sm-4\">\n               Pratitelji:\n               <div class=\"twitter_numbers\"> 36 </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   <div class=\"panel panel-default text-center\">\n      <div class=\"panel-body\">\n         <div class=\"\"><strong>Trendovi</strong></div>\n         <div class=\"hashtag_link\"><strong>#TravelTuesday</strong>\n          <div class=\"tweet_info\"> \n            @Croatia_hr \u0161alje tweetove o toj temi \n          </div>\n         </div>\n         <div class=\"hashtag_link\"><strong>#Hajduk1950</strong>\n           <div class=\"tweet_info\"> \n             @Hajduk_Split \u0161alje tweetove o toj temi \n           </div>\n         </div>\n         <div class=\"hashtag_link\"><strong>#StrongLife</strong>\n          <div class=\"tweet_info\"> \n              @BodyBuilding \u0161alje tweetove o toj temi \n            </div>\n          </div>\n         <div class=\"hashtag_link\"><strong>#CSGO Major</strong>\n          <div class=\"tweet_info\"> \n              @CSGO_LIFE \u0161alje tweetove o toj temi \n            </div>\n         </div>\n         <div class=\"hashtag_link\"><strong>#Esport_Life</strong>\n          <div class=\"tweet_info\"> \n              @Esport_eu \u0161alje tweetove o toj temi \n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<div class=\"col-md-6\">\n          <div class=\"row\">\n       <div class=\"box profile-info n-border-top\">\n                    <form>\n                        <textarea class=\"form-control input-lg p-text-area\" rows=\"2\" placeholder=\"Whats in your mind today?\"></textarea>\n                    </form>\n                    <div class=\"box-footer box-form\">\n                        <button type=\"button\" class=\"btn btn-primary pull-right\">Post</button>\n                        <ul class=\"nav nav-pills\">\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-camera\"></i></a></li>\n                            <li><a href=\"#\"><i class=\" fa fa-film\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-microphone\"></i></a></li>\n                        </ul>\n                    </div>\n       </div>\n       </div>\n        <div class=\"row\">\n          <div class=\"panel panel-default text-center\">\n             <div class=\"panel-heading\">\n               <h1>Basic</h1>\n        </div>\n        <div class=\"panel-body\">\n          <p>Hajduk opet izgubio utakmicu u san Lorenu rezultatom 2:0 sto je sokiralo navijace poznatog dalmatinskog kluba</p>\n          <p><strong>15</strong> Ipsum</p>\n          <p><strong>5</strong> Dolor</p>\n          <p><strong>2</strong> Sit</p>\n          <p><strong>Endless</strong> Amet</p>\n        </div>\n        <div class=\"panel-footer\">\n          <h3>$19</h3>\n          <h4>per month</h4>\n          <button class=\"btn btn-lg\">Sign Up</button>\n        </div>\n      </div>\n        </div>\n      </div>  \n\n      <!--THIS IS THE RIGHT COLUMN AKA FOLLOW COLUMN-->\n\n<div class=\"col-md-3\">\n   <div class=\"panel panel-default text-center\">\n      <div class=\"panel-body\">\n        <div><strong>Koga Pratiti</strong></div>\n        <div class=\"row\">\n        <hr>\n            <div class=\"col-xs-3\">\n               <div class=\"big-box\">\n                  <img src=\"https://pbs.twimg.com/profile_images/785814072075907072/ZoMi_QkU_normal.jpg\" class=\"img-thumbnail\" >\n               </div>\n            </div>\n            <div class=\"col-xs-6\">\n               <div class=\"row text_left\">\n                  <div><strong>NK Osijek</strong> @nkosijek</div>\n                  <a class=\"btn btn-default follow-btn\" href=\"#\" role=\"button\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Slijedi</a>\n               </div>\n            </div>\n         </div>\n         <hr>\n         <div class=\"row\">\n            <div class=\"col-xs-3\">\n               <div class=\"big-box\">\n                  <img src=\"https://pbs.twimg.com/profile_images/686576914916597760/OY475ev3_normal.png\" class=\"img-thumbnail\" >\n               </div>\n            </div>\n            <div class=\"col-xs-6\">\n               <div class=\"row text_left\">\n                  <div><strong>Na\u0161 Hajduk</strong> @nas_hajduk</div>\n                  <a class=\"btn btn-default follow-btn\" href=\"#\" role=\"button\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Slijedi</a>\n               </div>\n            </div>\n         </div>\n         <hr>\n         <div class=\"row\">\n            <div class=\"col-xs-3\">\n               <div class=\"big-box\">\n                  <img src=\"https://pbs.twimg.com/profile_images/748482794205122560/_xKDpDIv_normal.jpg\" class=\"img-thumbnail\" >\n               </div>\n            </div>\n            <div class=\"col-xs-6\">\n               <div class=\"row text_left\">\n                  <div><strong>FK Crvena zvezda</strong> @FKCZ</div>\n                  <a class=\"btn btn-default follow-btn\" href=\"#\" role=\"button\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Slijedi</a>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div> \n</div>  \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map