import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ContactFormComponent } from './contact-form.component';
import { ContactListComponent } from './contact-list.component';
import { ContactSearch } from './contact-search.component';

@Component({
	selector: 'todo-app',
	template: `
		<header-app></header-app>
		<div class="contact-list">
			<div class="contact-form">
				<div class="form-group active-form" [hidden]="isAtive">
					<button type="button" class="btn btn-default btn-lg pull-left" (click)="formActive(false, true)" [disabled]="isSearch">Search</button>
					<button type="button" class="btn btn-default btn-lg pull-right" (click)="formActive(true, false)" [disabled]="isForm">New Contact</button>
				</div>
				<search-contact [hidden]="!isSearch" (onSearch)="change.onSearch($event)"></search-contact>
				<form-app [hidden]="!isForm" #update (onChange)="change.ngOnChanges()"></form-app>
				<contact-list #change (onUpdate)="update.onchange($event)" (click)="formActive(true, false)"></contact-list>
			</div>
		</div>
	`, 
	directives: [
		HeaderComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactSearch
	]
})

export class AppComponent {
	
	isForm = false; // Show/Hidden form
	isSearch = false; // Show/Hidden search input
	
	formActive(form: boolean, search: boolean) {
		this.isForm = form;
		this.isSearch = search;
	}
}