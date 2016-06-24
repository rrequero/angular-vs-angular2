describe('Unit test of ListCtrl', function () {
    beforeEach(angular.mock.module('app.user.list'));

    var scope = null;
    var users = [{
        name: 'Ra',
        job: 'Full stack'
    }, {
        name:'Maria',
        job: 'Frontend'
    }];

    var listCtrl = null;
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        listCtrl = $controller('ListCtrl', {
            UserFactory: null,
            $rootScope: $rootScope,
            $state: null,
            $scope: scope,
            users: users
        })
    }));

    it('Users exist', function(){
        expect(listCtrl.users.length).toBe(users.length);
        expect(listCtrl.users[0].name).toBe(users[0].name);
    });









});
