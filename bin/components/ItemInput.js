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
var ItemInputComponent = (function () {
    function ItemInputComponent() {
        this.placeholder = "Add new item";
        this.itemAdded = new core_1.EventEmitter();
    }
    ItemInputComponent.prototype.addItem = function (input) {
        var value = input.value.trim();
        if (!value) {
            return;
        }
        input.value = "";
        this.itemAdded.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ItemInputComponent.prototype, "itemAdded", void 0);
    ItemInputComponent = __decorate([
        core_1.Component({
            selector: "item-input",
            template: "\n        <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" [placeholder]=\"placeholder\" #input (keyup.enter)=\"addItem(input)\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addItem(input)\">+ Add</button>\n              </span>\n              <ng-content></ng-content>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ItemInputComponent);
    return ItemInputComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemInputComponent;
//# sourceMappingURL=ItemInput.js.map