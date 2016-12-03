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
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.getProgressBarType = function () {
        if (this.value < 40) {
            return "danger";
        }
        else if (this.value >= 40 && this.value < 100) {
            return "info";
        }
        else {
            return "success";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressBarComponent.prototype, "value", void 0);
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: "progress-bar",
            template: "\n        <ngb-progressbar [type]=\"getProgressBarType()\" [value]=\"value\"></ngb-progressbar>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressBarComponent;
//# sourceMappingURL=ProgressBar.js.map