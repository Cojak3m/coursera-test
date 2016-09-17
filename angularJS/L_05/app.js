(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Mz";
  $scope.sayHello = function(){
    return "Hello coursera!";
  };
});

})();
