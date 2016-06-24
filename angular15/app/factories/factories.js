var factories = angular.module('app.factories', ['ngResource']);
factories.constant('API_URL', 'http://45.32.235.206:8000/api');

factories.factory('UserFactory', ['$resource', 'API_URL', function($resource, API_URL){

    return $resource(API_URL + '/users/:id', {id: '@id'}, {
        update:{
            method: 'PUT',
            params:{
                id: '@id'
            }
        }
    } );

}]);
factories.factory('JobFactory', ['$resource', 'API_URL', function($resource, API_URL){

    return $resource(API_URL + '/jobs');

}]);
