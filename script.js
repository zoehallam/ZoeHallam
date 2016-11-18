angular.module('DemoApp', [])

.controller('My.Controller', function($scope, $http) {
    $http.get('../itemsTest.json').success(function(activities) {
      $scope.activities = activities;
    });
});
