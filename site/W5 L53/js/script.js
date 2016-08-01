// event handler
document.addEventListener("DOMContentLoaded", function (event){

  // unobtrusive event binding
  document.querySelector("button")
    .addEventListener("click", function (){

      //call server to get the name
      $ajaxUtils
        .sendGetRequest("/W5 L53/data/name.txt", function (request) {
          var name = request.responseText;

          document.querySelector("#content")
            .innerHTML = "<h2>Hello " + name + "!</h2>";
        });


    });
});
