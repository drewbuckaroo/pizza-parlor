// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Pizza.prototype.price = function() {
  if (this.size == "small") {
    price = 10;
  } else if (this.size == "medium") {
    price = 20;
  } else if (this.size == "large") {
    price = 30;
  }
  if (this.toppings == "pepperoni") {
    price = price + 5;
  }
  return price;
}

















// User Interface Logic

$(document).ready(function() {
 
});
