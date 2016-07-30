// var company = new Object();
// // company.name = "Facebook";
// // company.ceo = new Object();
// // company.ceo.firstName = "Mark";
// // company.ceo.favColor = "blue";
// //
// // console.log(company["name"]);
//
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of the company": 110
// };
//
// console.log(facebook.ceo.firstName);

// ARRAYS
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {console.log("Hello " + name);};
// array[3] = {course: " HTML, CSS & JS"};
//
// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

//Short hand arrays creatyions
// var names = ["Yaakov", "John", "Joe"];
// console.log(names);
//
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }
//
// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"];
//
// var myObj = {
//   name:"Yaakov",
//   course: "HTML/CSS/JS",
//   platform: "Coursera"
// };
//
// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }
//
// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }
//
// names2.greeting = "Hi!";
// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }


//CLOSURES
function makeMultiplier (multiplier) {
  function b(){
    console.log("Multiplier is: " + multiplier);
  }
  b();
  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
