import {Component, OnInit, Inject} from 'angular2/core';
import {Router, RouteParams} from "angular2/router";
import {CloneService} from "../clone-service/clone-service";
import {ContactsService} from "../contacts-service/contacts-service";
import {Contact} from "../models/contact";


@Component({
  selector: 'contact-edit-component',
  templateUrl: 'app\/contact-edit-component/contact-edit-component.html',
  styleUrls: ['app\/contact-edit-component/contact-edit-component.css'],
  providers: [ContactsService, CloneService],
  directives: [],
  pipes: []
})
export class ContactEditComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  contact: Contact = <Contact>{ address: {}};


  constructor(private contactsService: ContactsService,
              private cloneService: CloneService<Contact>,
              @Inject(Router) private router: Router,
              @Inject(RouteParams) private params: RouteParams) {}

  ngOnInit():any {
    // this.contact = this.cloneService.createClone(this.contactsService.getContact(this.params.get('id')));
    this.contactsService.getContact(this.params.get('id'))
      .subscribe(contact => this.contact = contact);
  }

  cancel (contact: Contact) {
    //this.cloneService.abortChanges();
    this.goToDetails(contact);
  }

  save (contact: Contact) {
    //this.cloneService.commitChanges();
    //this.goToDetails(contact);
    this.contactsService.updateContact(contact)
        .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/ContactDetail', {id: contact.id}]);
  }
}
