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
var header_component_1 = require('./header.component');
var contact_form_component_1 = require('./contact-form.component');
var contact_list_component_1 = require('./contact-list.component');
var contact_search_component_1 = require('./contact-search.component');
var AppComponent = (function () {
    function AppComponent() {
        this.isForm = false; // Show/Hidden form
        this.isSearch = false; // Show/Hidden search input
    }
    AppComponent.prototype.formActive = function (form, search) {
        this.isForm = form;
        this.isSearch = search;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n\t\t<header-app></header-app>\n\t\t<div class=\"contact-list\">\n\t\t\t<div class=\"contact-form\">\n\t\t\t\t<div class=\"form-group active-form\" [hidden]=\"isAtive\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-lg pull-left\" (click)=\"formActive(false, true)\" [disabled]=\"isSearch\">Search</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-lg pull-right\" (click)=\"formActive(true, false)\" [disabled]=\"isForm\">New Contact</button>\n\t\t\t\t</div>\n\t\t\t\t<search-contact [hidden]=\"!isSearch\" (onSearch)=\"change.onSearch($event)\"></search-contact>\n\t\t\t\t<form-app [hidden]=\"!isForm\" #update (onChange)=\"change.ngOnChanges()\"></form-app>\n\t\t\t\t<contact-list #change (onUpdate)=\"update.onchange($event)\" (click)=\"formActive(true, false)\"></contact-list>\n\t\t\t</div>\n\t\t</div>\n\t",
            directives: [
                header_component_1.HeaderComponent,
                contact_form_component_1.ContactFormComponent,
                contact_list_component_1.ContactListComponent,
                contact_search_component_1.ContactSearch
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map