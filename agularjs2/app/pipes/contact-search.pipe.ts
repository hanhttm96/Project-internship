/*
* Search contact
*/

import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from '../services/contact';

@Pipe({
	name: 'search'
})

export class ContactSearchPipe implements PipeTransform {
	transform(allContacts: Contact[], temp) {
		return allContacts.filter((contact) => {
			return contact.name.toUpperCase().search(temp.toUpperCase()) != -1 ? true : false;
		});
	}
}