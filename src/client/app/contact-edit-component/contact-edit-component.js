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
var clone_service_1 = require("../clone-service/clone-service");
var contacts_service_1 = require("../contacts-service/contacts-service");
var ContactEditComponent = (function () {
    function ContactEditComponent(contactsService, cloneService, router, params) {
        this.contactsService = contactsService;
        this.cloneService = cloneService;
        this.router = router;
        this.params = params;
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        this.contact = this.cloneService.createClone(this.contactsService.getContact(this.params.get('id')));
    };
    ContactEditComponent.prototype.cancel = function (contact) {
        this.cloneService.abortChanges();
        this.goToDetails(contact);
    };
    ContactEditComponent.prototype.save = function (contact) {
        this.cloneService.commitChanges();
        this.goToDetails(contact);
    };
    ContactEditComponent.prototype.goToDetails = function (contact) {
        this.router.navigate(['/ContactDetail', { id: contact.id }]);
    };
    ContactEditComponent = __decorate([
        core_1.Component({
            selector: 'contact-edit-component',
            templateUrl: 'app\/contact-edit-component/contact-edit-component.html',
            styleUrls: ['app\/contact-edit-component/contact-edit-component.css'],
            providers: [contacts_service_1.ContactsService, clone_service_1.CloneService],
            directives: [],
            pipes: []
        }),
        __param(2, core_1.Inject(router_1.Router)),
        __param(3, core_1.Inject(router_1.RouteParams))
    ], ContactEditComponent);
    return ContactEditComponent;
}());
exports.ContactEditComponent = ContactEditComponent;
//# sourceMappingURL=contact-edit-component.js.map