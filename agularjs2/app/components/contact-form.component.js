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
var contact_1 = require('../services/contact');
var contact_service_1 = require('../services/contact.service');
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.contact = new contact_1.Contact();
        this.onChange = new core_1.EventEmitter();
        this.isUpdate = false;
        this.isAdd = true;
    }
    ContactFormComponent.prototype.addContact = function () {
        // Unique id
        this.contact.id = new Date().getTime();
        this.contactService.addContact(this.contact);
        this.isUpdate = false;
        this.isAdd = true;
    };
    ContactFormComponent.prototype.phoneNumberValidator = function () {
        if (!this.contact.phone) {
            return { inval: true };
        }
    };
    ContactFormComponent.prototype.onSubmit = function () {
        if (this.isUpdate) {
            this.upUpdate(this.contact);
        }
        if (this.isAdd) {
            this.addContact();
        }
        this.onChange.emit(null);
        this.contact.name = null;
        this.contact.phone = null;
        this.isAdd = true;
        this.isUpdate = false;
    };
    ContactFormComponent.prototype.onchange = function (contact) {
        this.contact = contact;
        this.isUpdate = true;
        this.isAdd = false;
    };
    ContactFormComponent.prototype.upUpdate = function (contact) {
        this.contactService.updateContact(contact);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContactFormComponent.prototype, "onChange", void 0);
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'form-app',
            templateUrl: 'app/components/contact-form.component.html',
            providers: [contact_service_1.ContactService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map