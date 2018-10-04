var app = angular.module('app', ['ngSanitize']);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.title = "Hello World"
    

  }
]);
