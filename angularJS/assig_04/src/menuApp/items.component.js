(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuApp/templates/categoriesItems.template.html',
    bindings: {
      items: '<'
    }
  });

})();
