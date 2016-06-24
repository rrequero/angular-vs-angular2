var application = angular.module('Application', ['ngResource', 'ui.router', 'app', 'ngAnimate']);

application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('app', {
        url: '/app',
        controller: 'AppCtrl as appCtrl',
        templateUrl: 'app/app.html'
    });
    $stateProvider.state('app.user', {
        url: '/user',
        controller: 'UserCtrl as userCtrl',
        templateUrl: 'app/user/user.html'
    });
    $stateProvider.state('app.user.list', {
        url: '/list',
        controller: 'ListCtrl as listCtrl',
        templateUrl: 'app/user/list/list.html'
    });
    $stateProvider.state('app.user.create', {
        url: '/create',
        controller: 'ManageCtrl as manageCtrl',
        templateUrl: 'app/user/create/create.html'
    });

    $stateProvider.state('app.user.edit', {
        url: '/edit/:id',
        controller: 'ManageCtrl as manageCtrl',
        templateUrl: 'app/user/create/create.html'
    });


    $urlRouterProvider.when('', '/app/user/list');

}]);
application.run(['$rootScope', '$state', function($rootScope, $state){

}]);
