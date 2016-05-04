import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {ContactsListComponent} from "./contacts-list-component/contacts-list-component";
import {ContactDetailComponent} from "./contact-detail-component/contact-detail-component";
import {ContactEditComponent} from "./contact-edit-component/contact-edit-component";

@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [ContactHeaderComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: `
     <contact-header-component></contact-header-component>
     <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path:'/', component:ContactsListComponent, name:'ContactsList' },
  { path:'/contacts/:id', component:ContactDetailComponent, name:'ContactDetail' },
  { path:'/contacts/:id/edit', component:ContactEditComponent, name:'ContactEdit' }
])
export class ContactsApp {}
