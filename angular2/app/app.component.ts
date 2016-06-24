import { Component }       from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { JobService } from './services/job.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, UserService, JobService]
})
@RouteConfig([
    {
        path: '/users/...',
        name: 'User',
        component: UserComponent,
        useAsDefault: true
    }
])
export class AppComponent {
}
