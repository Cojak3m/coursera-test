(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'itemsListTemplate.html',
      scope: {
        items: '<',
        onRemove: '&onRemove'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController (){}

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService){
    var narrowed = this;

    narrowed.searchTerm = "";
    narrowed.found = [];

    narrowed.getMenuItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems();
      var foundItems = [];
      promise.then(function(response) {

        for (var i = 0; i < response.data.menu_items.length; i++) {
          var descr = response.data.menu_items[i].description;
          if (descr.toLowerCase().indexOf(narrowed.searchTerm) !== -1) {
            foundItems.push(response.data.menu_items[i]);
          }
        }
        narrowed.found = foundItems;
      })
      .catch(function() {
        console.log('error');
      });

    };

      narrowed.clearMenuItems = function(){
        narrowed.found = [];
      };

      narrowed.removeItem = function (itemIndex) {
        console.log("Remove index: ", itemIndex);
        narrowed.found.splice(itemIndex, 1);
      };

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function() {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return response;
    };

  }


})();
