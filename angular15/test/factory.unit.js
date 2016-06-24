describe('Unit test of factory', function(){
    beforeEach(angular.mock.module('app.factories'));
    var jobFactory = null;
    var httpBackend = null;
    beforeEach(angular.mock.inject(function(JobFactory,$httpBackend, API_URL){
        debugger;
        jobFactory = JobFactory;
        httpBackend = $httpBackend;
        $httpBackend.whenGET(API_URL + '/jobs').respond(['untrabajo', 'dostrabajos']);
    }))
    it('test',function(){
        var jobs = jobFactory.query();
        httpBackend.flush();
        expect(jobs.length).toBe(2);
    })
});
