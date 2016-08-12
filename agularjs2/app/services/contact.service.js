"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_data_1 = require('./mock-data');
var ContactService = (function () {
    function ContactService() {
    }
    /*
    * Get all contacts
    */
    ContactService.prototype.getContacts = function () {
        // Store contacts into browser
        if (!localStorage.getItem('CONTACTS')) {
            localStorage.setItem('CONTACTS', JSON.stringify(mock_data_1.CONTACTS));
        }
        return Promise.resolve(JSON.parse(localStorage.getItem('CONTACTS')));
    };
    /*
    * Add new a contact
    */
    ContactService.prototype.addContact = function (contact) {
        var contacts = JSON.parse(localStorage.getItem('CONTACTS'));
        contacts.push(contact);
        localStorage.setItem('CONTACTS', JSON.stringify(contacts));
    };
    /*
    * Remove a contact
    */
    ContactService.prototype.removeContact = function (contact) {
        var contacts = JSON.parse(localStorage.getItem('CONTACTS'));
        contacts.forEach(function (item, index) {
            if (item.id == contact.id) {
                contacts.splice(index, 1);
            }
        });
        localStorage.setItem('CONTACTS', JSON.stringify(contacts));
    };
    /*
    * Update a contact
    */
    ContactService.prototype.updateContact = function (contact) {
        var contacts = JSON.parse(localStorage.getItem('CONTACTS'));
        contacts.forEach(function (item, index) {
            if (item.id == contact.id) {
                contacts[index].name = contact.name;
                contacts[index].phone = contact.phone;
            }
        });
        localStorage.setItem('CONTACTS', JSON.stringify(contacts));
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map