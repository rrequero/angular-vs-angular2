import { Component }       from '@angular/core';
import { UserListComponent } from './list/user-list.component';
import { UserCreateComponent } from './create/user-create.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'users',
    templateUrl: 'app/user/user.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/list',
        name: 'UserList',
        component: UserListComponent,
        useAsDefault: true
    },
    {
        path: '/create',
        name: 'UserCreate',
        component: UserCreateComponent
    },
    {
        path: '/edit/:id',
        name: 'UserEdit',
        component: UserCreateComponent
    }
])
export class UserComponent {

}
