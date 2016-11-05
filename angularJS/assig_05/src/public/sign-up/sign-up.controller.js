(function(){
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject =['MenuService'];
  function SignUpController(MenuService){
    var signUpCtrl = this;
    signUpCtrl.error = false;
    signUpCtrl.completed = false;

    signUpCtrl.submit = function(){
      var promise = MenuService.getFavItem(signUpCtrl.user.favDishNo);
      promise.then(function(response){
        signUpCtrl.user.favItem = response;
        signUpCtrl.user.updated = true;
        signUpCtrl.user.notUpdated = false;
        MenuService.getUserData(signUpCtrl.user);
        //console.log("signUpCtrl.submit:USER: ", signUpCtrl.user);
        signUpCtrl.completed = true;
        signUpCtrl.error = false;
      })
      .catch(function(error){
        signUpCtrl.error = true;
        signUpCtrl.completed = false;
      });
    };
  }

})();
