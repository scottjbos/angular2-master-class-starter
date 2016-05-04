"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var CloneService = (function () {
    function CloneService() {
    }
    CloneService.prototype.createClone = function (item) {
        this.originalItem = item;
        this.currentItem = this.clone(item);
        return this.currentItem;
    };
    CloneService.prototype.getItem = function () {
        return this.currentItem;
    };
    CloneService.prototype.abortChanges = function () {
        Object.assign(this.currentItem, this.originalItem);
        return this.originalItem;
    };
    CloneService.prototype.commitChanges = function () {
        Object.assign(this.originalItem, this.currentItem);
    };
    CloneService.prototype.clone = function (item) {
        // super poor clone implementation
        return JSON.parse(JSON.stringify(item));
    };
    CloneService = __decorate([
        core_1.Injectable()
    ], CloneService);
    return CloneService;
}());
exports.CloneService = CloneService;
//# sourceMappingURL=clone-service.js.map