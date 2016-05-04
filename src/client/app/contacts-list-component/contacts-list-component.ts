import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts-service/contacts-service";

@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app\/contacts-list-component/contacts-list-component.html',
  styleUrls: ['app\/contacts-list-component/contacts-list-component.css'],
  providers: [ContactsService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class ContactsListComponent implements OnInit {

  contacts:Array<Contact> = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit():any {
    this.contacts = this.contactsService.getContacts();
  }
}
