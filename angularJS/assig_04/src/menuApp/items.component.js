(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  // templateUrl: 'src/MenuApp/templates/items.list.template.html',
  bindings: {
    categoryList: '<'
  }
});

})();
