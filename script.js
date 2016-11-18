angular.module('DemoApp', [])

.controller('My.Controller', function($scope, $http) {
    $http.get('../items.json').success(function(activities) {
      $scope.activities = activities;
    });
});
