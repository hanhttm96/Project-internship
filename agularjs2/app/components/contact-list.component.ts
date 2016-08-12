import { Component, Output, EventEmitter } from '@angular/core';


import { Contact } from '../services/contact';
import { ContactService } from '../services/contact.service';
import { ContactSearchPipe } from '../pipes/contact-search.pipe';



@Component({
	selector: 'contact-list',
	templateUrl:'app/components/contact-list.component.html',
	providers: [ContactService],
	pipes: [ContactSearchPipe]
})

export class ContactListComponent {

	contacts: Contact[] = []
	contact: Contact
	searchItem = ''

	@Output() onUpdate:EventEmitter<any> = new EventEmitter();

	constructor(private contactService: ContactService) {}

	getContacts() {
		this.contactService.getContacts().then(contacts => this.contacts = contacts);
	}

	ngOnInit() {
		this.getContacts();
	}

	onSelect(contact: Contact) {
		this.contact = contact;
		this.onUpdate.emit(contact);
	}
	
	ngOnChanges() {
		this.getContacts();
	}

	removeContact(contact: Contact) {
		this.contactService.removeContact(contact);
		this.ngOnChanges();
	}

	onSearch(name: string) {
		this.searchItem = name;
	}
}