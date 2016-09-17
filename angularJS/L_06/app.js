(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorConroller', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function(){
    var totalNameValue = calculateNumericRofString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNumericRofString (string){
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
});


})();
