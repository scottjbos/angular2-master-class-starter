import {Component, Inject, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ContactsService} from "../contacts-service/contacts-service";
import {RouteParams} from "angular2/router";
import {Contact} from "../models/contact";


@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app\/contact-detail-component/contact-detail-component.html',
  styleUrls: ['app\/contact-detail-component/contact-detail-component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ContactsService],
  pipes: []
})
export class ContactDetailComponent implements OnInit {

  contact:Contact;

  constructor(private contactsService: ContactsService, @Inject(RouteParams) private params: RouteParams) {}

  ngOnInit():any {
    //this.contact = this.contactsService.getContact(this.params.get('id'));
    this.contactsService.getContact(this.params.get('id'))
      .subscribe(contact => this.contact = contact);
  }

}
