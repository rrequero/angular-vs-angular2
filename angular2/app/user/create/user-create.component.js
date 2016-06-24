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
var user_service_1 = require('../../services/user.service');
var job_service_1 = require('../../services/job.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var UserCreateComponent = (function () {
    function UserCreateComponent(userService, jobService, router, routeParams) {
        this.userService = userService;
        this.jobService = jobService;
        this.router = router;
        this.routeParams = routeParams;
    }
    UserCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.save(this.user)
            .then(function () {
            _this.router.navigate(['UserList']);
        })
            .catch(function (error) { return alert(error); });
        return false;
    };
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new user_1.User();
        this.jobService.getJobs().then(function (jobs) { return _this.jobs = jobs; });
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.userService.getUser(id)
                .then(function (user) { return _this.user = user; });
        }
    };
    UserCreateComponent = __decorate([
        core_1.Component({
            selector: 'user-create',
            templateUrl: 'app/user/create/user-create.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, job_service_1.JobService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map