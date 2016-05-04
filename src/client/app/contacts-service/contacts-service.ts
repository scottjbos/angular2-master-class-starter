import {Injectable} from 'angular2/core';
import {CONTACT_DATA} from '../data/contact-data'
import {Contact} from "../models/contact";

@Injectable()
export class ContactsService {

  private contacts:Array<Contact> = CONTACT_DATA;

  getContacts() {
    return this.contacts;
  }

  getContact(id: any) {
    return this.contacts.find(contact => contact.id == id);
  }
}
