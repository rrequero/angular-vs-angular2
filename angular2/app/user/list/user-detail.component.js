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
var user_1 = require('../../services/user');
var core_1 = require('@angular/core');
var UserDetailComponent = (function () {
    function UserDetailComponent() {
        this.closePanel = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserDetailComponent.prototype, "closePanel", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            //encapsulation: ViewEncapsulation.Native,
            template: "\n        <div class=\"panel panel-success\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Detalle de usuario</h3>\n          </div>\n          <div class=\"panel-body\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                  <label class=\"col-sm-2 control-label\">Nombre</label>\n                  <div class=\"col-sm-10\">\n                    <p class=\"form-control-static\">{{user.name}}</p>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Trabajo</label>\n                  <div class=\"col-sm-10\">\n                    <p class=\"form-control-static\">{{user.job}}</p>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Fecha de nacimiento</label>\n                  <div class=\"col-sm-10\">\n                    <p class=\"form-control-static\">{{user.birthdate | date}}</p>\n                  </div>\n                </div>\n            </form>\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"closePanel.emit(user)\">Cerrar</button>\n          </div>\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map