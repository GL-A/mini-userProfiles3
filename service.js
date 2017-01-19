angular.module('userProfiles').service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data;
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Pablo';
        parsedResponse[0].last_name = 'Corona';
        parsedResponse[1].last_name = 'Montero';
        parsedResponse[2].last_name = 'Santos'
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});
