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
var contact_service_1 = require('../services/contact.service');
var contact_search_pipe_1 = require('../pipes/contact-search.pipe');
var ContactListComponent = (function () {
    function ContactListComponent(contactService) {
        this.contactService = contactService;
        this.contacts = [];
        this.searchItem = '';
        this.onUpdate = new core_1.EventEmitter();
    }
    ContactListComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactListComponent.prototype.onSelect = function (contact) {
        this.contact = contact;
        this.onUpdate.emit(contact);
    };
    ContactListComponent.prototype.ngOnChanges = function () {
        this.getContacts();
    };
    ContactListComponent.prototype.removeContact = function (contact) {
        this.contactService.removeContact(contact);
        this.ngOnChanges();
    };
    ContactListComponent.prototype.onSearch = function (name) {
        this.searchItem = name;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContactListComponent.prototype, "onUpdate", void 0);
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: 'app/components/contact-list.component.html',
            providers: [contact_service_1.ContactService],
            pipes: [contact_search_pipe_1.ContactSearchPipe]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map