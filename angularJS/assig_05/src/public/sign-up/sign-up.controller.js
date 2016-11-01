(function(){
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject =['MenuService'];
  function SignUpController(MenuService){
    var signUpCtrl = this;

    signUpCtrl.submit = function(){
      signUpCtrl.completed = true;
      var promise = MenuService.getFavItem(signUpCtrl.user.favDishNo);
      promise.then(function(response){
        signUpCtrl.user.favItem = response;
        MenuService.getUserData(signUpCtrl.user);
        console.log("signUpCtrl.submit:USER: ", signUpCtrl.user);
      })
      .catch(function(error){
        console.log(error);
      });
    };
  }

})();
