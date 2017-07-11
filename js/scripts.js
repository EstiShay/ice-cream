$(function(){

  var flavors = ["rocky road", "cookie dough", "marionberry", "salted caramel", "balsamic vinagrette"];
  // flavors.forEach(function(flavor) {
  //   $("ul").append("<li>" + flavor);
  for (var index = 0; index < flavors.length; index += 1) {
    $("ul").append("<li>" + flavors[index]);
  }
});
