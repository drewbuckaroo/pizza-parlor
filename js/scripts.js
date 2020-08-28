// Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;

}

Pizza.prototype.price = function() {
  if (this.size == "small") {
    price = 10;
  } else if (this.size == "medium") {
    price = 20;
  } else if (this.size == "large") {
    price = 30;
  }
  if (this.topping == "pepperoni") {
    price = price + 5;
  }
  return price;
}

















// User Interface Logic

$(document).ready(function() {
 
});
