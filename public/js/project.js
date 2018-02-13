var app = angular.module('myApp', [])
.controller('projectsCtrl', ['$scope', '$http', function($scope, $http) {
   $http.get('/json/projects.json').then(function(response){
        var url = window.location.pathname;
	    var projectID = url.substr(url.lastIndexOf("/")+1);
        $scope.project = response.data.projects[projectID];
   });
}]);
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('((');
    $interpolateProvider.endSymbol('))');
  });