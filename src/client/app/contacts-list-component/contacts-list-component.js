"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var contacts_service_1 = require("../contacts-service/contacts-service");
var ContactsListComponent = (function () {
    function ContactsListComponent(contactsService) {
        this.contactsService = contactsService;
        this.contacts = [];
    }
    ContactsListComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactsService.getContacts();
    };
    ContactsListComponent = __decorate([
        core_1.Component({
            selector: 'contacts-list-component',
            templateUrl: 'app\/contacts-list-component/contacts-list-component.html',
            styleUrls: ['app\/contacts-list-component/contacts-list-component.css'],
            providers: [contacts_service_1.ContactsService],
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: []
        })
    ], ContactsListComponent);
    return ContactsListComponent;
}());
exports.ContactsListComponent = ContactsListComponent;
//# sourceMappingURL=contacts-list-component.js.map