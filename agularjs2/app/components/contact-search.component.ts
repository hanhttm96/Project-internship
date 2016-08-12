import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'search-contact',
	template: '<input type="text" placeholder="Search" class="search-content" (keyup)="onKey($event)">'
})

export class ContactSearch {

	@Output() onSearch:EventEmitter<any> = new EventEmitter();
	searchContent = '';
	
	onKey(event:any) {
		this.searchContent = event.target.value;
		this.onSearch.emit(this.searchContent);
	}
}