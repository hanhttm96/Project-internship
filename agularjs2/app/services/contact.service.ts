import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-data';

@Injectable()
export class ContactService {

	/*
	* Get all contacts
	*/
	getContacts() {
		// Store contacts into browser
		if(!localStorage.getItem('CONTACTS')) {
			localStorage.setItem('CONTACTS', JSON.stringify(CONTACTS));
		}
		return Promise.resolve(JSON.parse(localStorage.getItem('CONTACTS')));
	}

	/*
	* Add new a contact
	*/
	addContact(contact: Contact) {
		let contacts = JSON.parse(localStorage.getItem('CONTACTS'));
		contacts.push(contact);
		localStorage.setItem('CONTACTS', JSON.stringify(contacts));
	}

	/*
	* Remove a contact
	*/
	removeContact(contact: Contact) {
		let contacts = JSON.parse(localStorage.getItem('CONTACTS'))
		contacts.forEach((item, index) => {
			if(item.id == contact.id) {
				contacts.splice(index, 1);
			}
		})
		localStorage.setItem('CONTACTS', JSON.stringify(contacts));
	}

	/*
	* Update a contact
	*/
	updateContact(contact: Contact) {
		let contacts = JSON.parse(localStorage.getItem('CONTACTS'))
		contacts.forEach((item, index) => {
			if(item.id == contact.id) {
				contacts[index].name = contact.name;
				contacts[index].phone = contact.phone;
			}
		})
		localStorage.setItem('CONTACTS', JSON.stringify(contacts));
	}
}