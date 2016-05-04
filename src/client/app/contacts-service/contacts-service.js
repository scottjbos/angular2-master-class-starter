"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var contact_data_1 = require('../data/contact-data');
var ContactsService = (function () {
    function ContactsService() {
        this.contacts = contact_data_1.CONTACT_DATA;
    }
    ContactsService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactsService.prototype.getContact = function (id) {
        return this.contacts.find(function (contact) { return contact.id == id; });
    };
    ContactsService = __decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts-service.js.map