$(function(){

  var flavors = ["rocky road", "cookie dough", "marionberry", "salted caramel", "balsamic vinagrette"];
  flavors.forEach(function(flavor) {
  //        debugger;
    $("ul").append("<li>" + flavor);
  });
});
