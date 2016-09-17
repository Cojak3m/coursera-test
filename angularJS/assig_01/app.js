(function () {
  'use strict';

  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope) {
    $scope.lunchList = "";
    $scope.response = "";
    $scope.statusClass = "";
    $scope.countLunch = function () {
      var finalResponse = calculatresponse($scope.lunchList);
      $scope.response = finalResponse;
    };


    function calculatresponse(str) {
      var trueResponse = "";
      if (str.length > 0){
        var estimatedResponse = str.split(",");
        estimatedResponse = remEmpty(estimatedResponse);
        console.log(estimatedResponse);
        var lunchItems = estimatedResponse.length;

        if (lunchItems <= 3) {
          trueResponse = "Enjoy!";
        } else if (lunchItems > 3){
          trueResponse = "Too much!";
        }
        $scope.statusClass = "has-success";
      }
      else {
        trueResponse = "Please enter data first";
        $scope.statusClass = "has-error";

      }
      return trueResponse;
    }

    function remEmpty(array){
      var resArr = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i].trim().length > 0) {
          resArr.push(array[i]);
        }
      }
      return resArr;
    }

  }


})();
