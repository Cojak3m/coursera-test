(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  // CategoriesController.$inject = ['MenuDataService', 'items'];
  // function CategoriesController(MenuDataService, items) {
  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
    var categoryItems = this;
    categoryItems.items = items.data;
  }

})();
