// event handler
document.addEventListener("DOMContentLoaded", function (event){

  // unobtrusive event binding
  document.querySelector("button")
    .addEventListener("click", function (){

      //call server to get the name
      $ajaxUtils
        .sendGetRequest("/W5 L53/data/name.json", function (res) {
          var message = res.firstName + " " + res.lastName;
          if (res.LikesChineseFood) {
            message += " likes Chinese food";
          }
          else {
            message += " doesn't like Chinese food";
          }
          message += " and uses ";
          message += res.numberOfDisplays;
          message += " displays for coding.";

          document.querySelector("#content")
            .innerHTML = "<h2>" + message + "</h2>";
        }, true);


    });
});
