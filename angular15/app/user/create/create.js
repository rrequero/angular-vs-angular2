var create = angular.module('app.user.create', ['ui.router', 'app.factories']);

create.controller('ManageCtrl', ['UserFactory', '$rootScope', 'JobFactory', '$stateParams', '$state',
                function(UserFactory, $rootScope, JobFactory, $stateParams, $state){

    this.jobs = JobFactory.query();

    this.save = function(){

        var promise = null;
        if(this.user.id){
            promise = this.user.$update();
        } else {
            promise = UserFactory.save(this.user).$promise;
        }
        promise.then(function(){
            this.user = null;
            this.form.$setPristine();
            $state.go('app.user.list');
        }.bind(this));

    };
    
    if($stateParams.id){
        this.user = UserFactory.get({id: $stateParams.id});
        this.user.$promise.then(function(){
            this.user.birthdate = new Date(this.user.birthdate);
        }.bind(this));
    }



}])
