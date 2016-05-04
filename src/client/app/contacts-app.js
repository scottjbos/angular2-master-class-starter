"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var contact_header_component_1 = require('./contact-header-component/contact-header-component');
var contacts_list_component_1 = require("./contacts-list-component/contacts-list-component");
var contact_detail_component_1 = require("./contact-detail-component/contact-detail-component");
var contact_edit_component_1 = require("./contact-edit-component/contact-edit-component");
var ContactsApp = (function () {
    function ContactsApp() {
    }
    ContactsApp = __decorate([
        core_1.Component({
            selector: 'contacts-app',
            styleUrls: ['app/contacts-app.css'],
            directives: [contact_header_component_1.ContactHeaderComponent, router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS],
            template: "\n     <contact-header-component></contact-header-component>\n     <router-outlet></router-outlet>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', component: contacts_list_component_1.ContactsListComponent, name: 'ContactsList' },
            { path: '/contacts/:id', component: contact_detail_component_1.ContactDetailComponent, name: 'ContactDetail' },
            { path: '/contacts/:id/edit', component: contact_edit_component_1.ContactEditComponent, name: 'ContactEdit' }
        ])
    ], ContactsApp);
    return ContactsApp;
}());
exports.ContactsApp = ContactsApp;
//# sourceMappingURL=contacts-app.js.map