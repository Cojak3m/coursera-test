(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  // ItemsController.$inject = ['MenuDataService', 'categoryList'];
  // function ItemsController(MenuDataService, categoryList) {
  ItemsController.$inject = ['categoryList'];
  function ItemsController(categoryList) {
    var itemsList = this;
    itemsList.items = categoryList.data.menu_items;
  }

})();
