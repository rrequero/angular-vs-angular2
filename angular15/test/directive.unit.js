describe('Unit test of ListCtrl', function () {
    beforeEach(angular.mock.module('Application'));

    var scope = null;
    var html = '<loading show="mostrarLoading"></loading>';
    var elem = null;
    beforeEach(angular.mock.inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.mostrarLoading = false;

        // elem = $compile(html)(scope);
        // scope.$digest();
    }));

    it('Users exist', function(){
        // expect(elem[0].querySelector('.loading').className.indexOf('ng-hide') >= 0).toBe(true);
    });









});
