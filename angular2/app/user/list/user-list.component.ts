import { User } from '../../services/user';
import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { CutPipe } from '../../cut.pipe';
import { UserDetailComponent } from './user-detail.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/list/user-list.component.html',
    directives: [ROUTER_DIRECTIVES, UserDetailComponent],
    pipes:[CutPipe],
    styleUrls: ['app/user/list/user-list.component.css']
})

export class UserListComponent  implements OnInit{

    users: User[];
    selectedUser: User;
    constructor(private router: Router, private userService: UserService) { }

    editUser(id: number){
        this.router.navigate(['UserEdit', { id: id }]);
    }

    removeUser(user: User){
        this.userService.delete(user).then(() => this.getUsers());
    }

    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit() {
        this.getUsers();
    }

    selectUser(user){
        this.selectedUser = user;
    }
}
