"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var contacts_service_1 = require("../contacts-service/contacts-service");
var router_2 = require("angular2/router");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactsService, params) {
        this.contactsService = contactsService;
        this.params = params;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.contact = this.contactsService.getContact(this.params.get('id'));
    };
    ContactDetailComponent = __decorate([
        core_1.Component({
            selector: 'contact-detail-component',
            templateUrl: 'app\/contact-detail-component/contact-detail-component.html',
            styleUrls: ['app\/contact-detail-component/contact-detail-component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [contacts_service_1.ContactsService],
            pipes: []
        }),
        __param(1, core_1.Inject(router_2.RouteParams))
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail-component.js.map