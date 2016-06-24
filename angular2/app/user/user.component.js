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
var user_list_component_1 = require('./list/user-list.component');
var user_create_component_1 = require('./create/user-create.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/user/user.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/list',
                name: 'UserList',
                component: user_list_component_1.UserListComponent,
                useAsDefault: true
            },
            {
                path: '/create',
                name: 'UserCreate',
                component: user_create_component_1.UserCreateComponent
            },
            {
                path: '/edit/:id',
                name: 'UserEdit',
                component: user_create_component_1.UserCreateComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map