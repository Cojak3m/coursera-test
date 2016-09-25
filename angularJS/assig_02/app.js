(function () {
  'use strict';

  var shoppingList = [
    { name: "Milk", quantity: 2 },
    { name: "Donuts", quantity: 20 },
    { name: "Cookies", quantity: 30 },
    { name: "Chocolate", quantity: 5 },
    { name: "Shugary Drinks", quantity: 6 }
  ];

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var listToBuy = this;
  listToBuy.list = ShoppingListCheckOffService.getItemsToBuy();

  listToBuy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.addItemBought(listToBuy.list[itemIndex]);
    ShoppingListCheckOffService.removeItemToBuy(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var listBought = this;

  listBought.list = ShoppingListCheckOffService.getItemsBought();

  listBought.notBoughtItem = function (itemIndex) {
    ShoppingListCheckOffService.addItemToBuy(listBought.list[itemIndex]);
    ShoppingListCheckOffService.removeItemBought(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsBought = [];
  var itemsToBuy = shoppingList;

  service.addItemToBuy = function (item) {
    var itemToBuy = {
      name: item.name,
      quantity: item.quantity
    };
    itemsToBuy.push(itemToBuy);
  };

  service.addItemBought = function (item) {
    var itemBought = {
      name: item.name,
      quantity: item.quantity
    };
    itemsBought.push(itemBought);
  };

  service.removeItemToBuy = function (itemIdex) {
    itemsToBuy.splice(itemIdex, 1);
  };

  service.removeItemBought = function (itemIdex) {
    itemsBought.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
