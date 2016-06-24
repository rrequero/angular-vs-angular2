import { User } from '../../services/user';
import { Component, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'user-detail',
    //encapsulation: ViewEncapsulation.Native,
    template: `
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Detalle de usuario</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Nombre</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{user.name}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-sm-2 control-label">Trabajo</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{user.job}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-sm-2 control-label">Fecha de nacimiento</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{user.birthdate | date}}</p>
                  </div>
                </div>
            </form>
            <button type="button" class="btn btn-link" (click)="closePanel.emit(user)">Cerrar</button>
          </div>
        </div>
    `,
})

export class UserDetailComponent {

    @Input() user: User;
    @Output() closePanel = new EventEmitter()

    // closePanel(){
    //     this.closePanel.emit(this.user);
    // }
}
