import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';

import { Contact } from '../services/contact';

import { ContactService } from '../services/contact.service';

@Component({
	selector: 'form-app',
	templateUrl:'app/components/contact-form.component.html',
	providers: [ContactService]
})

export class ContactFormComponent {

	contact = new Contact();
	constructor(private contactService: ContactService) {}
	@Output() onChange:EventEmitter<any> = new EventEmitter();
	isUpdate = false;
	isAdd = true;

	addContact() {
		// Unique id
		this.contact.id = new Date().getTime();
		this.contactService.addContact(this.contact);
		this.isUpdate = false;
		this.isAdd = true;
	}

	phoneNumberValidator() {
		if(!this.contact.phone) {
			return {inval : true};
		}
	}

	onSubmit() {
		if(this.isUpdate ) {
			this.upUpdate(this.contact);
		} 
		if(this.isAdd) {
			this.addContact();
		}
		this.onChange.emit(null);
		this.contact.name = null;
		this.contact.phone = null;
		this.isAdd = true;
		this.isUpdate = false;
	}

	onchange(contact: Contact) {
		this.contact = contact;
		this.isUpdate = true;
		this.isAdd = false;

	}

	upUpdate(contact: Contact) {
		this.contactService.updateContact(contact);
	}
}