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
var TodoItem_1 = require('./model/TodoItem');
var AppComponent = (function () {
    function AppComponent() {
        this.todoItems = [
            new TodoItem_1.default("Learn Angular 2"),
            new TodoItem_1.default("Learn React"),
            new TodoItem_1.default("Learn ASP.NET core", true),
            new TodoItem_1.default("Learn node.js", true),
        ];
    }
    AppComponent.prototype.getDonePercentage = function () {
        if (this.todoItems.length === 0) {
            return 100;
        }
        return 100 * this.getDoneItemsCount() / this.getTotalItemsCount();
    };
    AppComponent.prototype.getDoneItemsCount = function () {
        return this.todoItems.filter(function (todo) { return todo.done; }).length;
    };
    AppComponent.prototype.getTotalItemsCount = function () {
        return this.todoItems.length;
    };
    AppComponent.prototype.deleteDoneTodos = function () {
        //delete done -> keep only not done items
        this.todoItems = this.todoItems.filter(function (it) { return !it.done; });
    };
    AppComponent.prototype.deleteTodo = function (todo) {
        this.todoItems.splice(this.todoItems.indexOf(todo), 1);
    };
    AppComponent.prototype.checkAll = function () {
        this.todoItems.forEach(function (it) { return it.done = true; });
    };
    AppComponent.prototype.addTodo = function (value) {
        this.todoItems.push(new TodoItem_1.default(value));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    \n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Naslovnica <i class=\"fa fa-home fa-lx\" aria-hidden=\"true\"></i> </a></li>\n        <li><a href=\"#\">Obavijesti <i class=\"fa fa-bell fa-lx\" aria-hidden=\"true\"></i> </a></li>\n\t\t    <li><a href=\"#\">Poruke <i class=\"fa fa-envelope fa-lx\" aria-hidden=\"true\"></i> </a></li>\n        \n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n\t  <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n\t  \n\t  <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n\t\t\n    \n       <button type=\"submit\" class=\"btn btn-primary\">Tweet</button>\n       \n        \n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n<div class=\"col-md-3\">\n</div>\n<div class=\"col-md-6\">\n          <div class=\"row\">\n            \n\n       <div class=\"box profile-info n-border-top\">\n                    <form>\n                        <textarea class=\"form-control input-lg p-text-area\" rows=\"2\" placeholder=\"Whats in your mind today?\"></textarea>\n                    </form>\n                    <div class=\"box-footer box-form\">\n                        <button type=\"button\" class=\"btn btn-primary pull-right\">Post</button>\n                        <ul class=\"nav nav-pills\">\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-camera\"></i></a></li>\n                            <li><a href=\"#\"><i class=\" fa fa-film\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-microphone\"></i></a></li>\n                        </ul>\n                    </div>\n       </div>\n       </div>\n        <div class=\"row\">\n        dslfjsldkfjsldk\n        </div>\n      </div>\n\n\n\n       \n      \n               \n\n               \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map