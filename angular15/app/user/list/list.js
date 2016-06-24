var list = angular.module('app.user.list', ['ui.router', 'app.factories']);

list.component('userDetail', {
    controllerAs: 'userDetailCtrl',
    bindings: {
        user: '<',
        closePanel: '&'
    },
    controller: function(){

    },
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
                    <p class="form-control-static">{{userDetailCtrl.user.name}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-sm-2 control-label">Trabajo</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{userDetailCtrl.user.job}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-sm-2 control-label">Fecha de nacimiento</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{userDetailCtrl.user.birthdate | date}}</p>
                  </div>
                </div>
            </form>
            <button type="button" class="btn btn-link" ng-click="userDetailCtrl.closePanel()">Cerrar</button>
          </div>
        </div>
    `,
})

list.controller('ListCtrl', ['UserFactory', '$rootScope', '$state', '$scope',
    function(UserFactory, $rootScope, $state, users, $scope){

    this.removeUser = function(i, user){
        this.users.splice(i, 1);
    };
    var updateList = function(){
        this.users = UserFactory.query();
    }.bind(this);

    this.editUser = function(id){
        $state.go('app.user.edit', {id: id});
    };

    this.selectUser = function(user){
        this.selectedUser = user;
    };

    this.users = UserFactory.query();

}]);
