(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'itemsListTemplate.html',
      scope: {
        items: '<',
        onRemove: '&'
      }

    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService){
    var narrowed = this;

    narrowed.searchTerm = "";
    narrowed.found = [];

    narrowed.getMenuItems = function(searchTerm) {
      narrowed.found = MenuSearchService.clearList();
      narrowed.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    };

    narrowed.clearMenuItems = function(){
      narrowed.found = MenuSearchService.clearList();
      //console.log("Btn click - clearMenuItems function result: ", narrowed.found);
    };

    narrowed.onRemove = function (itemIndex) {
      narrowed.found = MenuSearchService.removeItem(itemIndex);
    };

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var foundItems = [];
    service.getMatchedMenuItems = function(searchTerm) {
      var response = $https({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(response) {
        for (var i = 0; i < response.data.menu_items.length; i++) {
          var descr = response.data.menu_items[i].description;
          if (descr.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(response.data.menu_items[i]);
          }
        }
        //console.log("Btn click - getMenuItems function result: ", narrowed.found);
      })
      .catch(function() {
        console.log('error');
      });

      return foundItems;
    };

    service.removeItem = function(itemIndex){
      foundItems.splice(itemIndex, 1);
      return foundItems;
    }

    service.clearList = function(){
      foundItems = [];
      return foundItems;
    }

  }


})();
