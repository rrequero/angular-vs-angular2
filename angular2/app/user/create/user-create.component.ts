import { User } from '../../services/user';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { JobService } from '../../services/job.service';
import { OnInit } from '@angular/core';

import { RouteParams, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
    selector: 'user-create',
    templateUrl: 'app/user/create/user-create.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class UserCreateComponent implements OnInit {
    user: User;
    jobs: string[];
    constructor(
        private userService: UserService,
        private jobService: JobService,
        private router: Router,
        private routeParams: RouteParams) {
    }

    onSubmit() {
        this.userService.save(this.user)
            .then(() => {

            this.router.navigate(['UserList']);
        })
        .catch(error => alert(error));
        return false;
    }

    ngOnInit() {
        this.user = new User();
        this.jobService.getJobs().then(jobs => this.jobs = jobs);
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.userService.getUser(id)
                .then(user => this.user = user);
        }
    }
}
