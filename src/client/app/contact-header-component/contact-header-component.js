"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ContactHeaderComponent = (function () {
    function ContactHeaderComponent() {
    }
    ContactHeaderComponent = __decorate([
        core_1.Component({
            selector: 'contact-header-component',
            templateUrl: 'app/contact-header-component/contact-header-component.html',
            styleUrls: ['app/contact-header-component/contact-header-component.css'],
            providers: [],
            directives: [],
            pipes: []
        })
    ], ContactHeaderComponent);
    return ContactHeaderComponent;
}());
exports.ContactHeaderComponent = ContactHeaderComponent;
//# sourceMappingURL=contact-header-component.js.map