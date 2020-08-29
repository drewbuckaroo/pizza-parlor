// Business Logic

function Pizza(pizzaSize, pizzaTopping1, pizzaTopping2, pizzaTopping3) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping1 = pizzaTopping1;
  this.pizzaTopping2 = pizzaTopping2;
  this.pizzaTopping3 = pizzaTopping3;
  this.price = 0;
}

Pizza.prototype.totalPrice = function() {
  if (this.pizzaSize == "small") {
    this.price += 10;
  } else if (this.pizzaSize == "medium") {
    this.price += 20;
  } else if (this.pizzaSize == "large") {
    this.price += 30;
  }
  if (this.pizzaTopping1 == "pepperoni") {
    this.price = this.price + 5;
  } else if (this.pizzaTopping1 == "pineapple") {
    this.price = this.price + 2;
  } else if (this.pizzaTopping1 == "jalepeno") {
      this.price = this.price + 2;
  }
  if (this.pizzaTopping2 == "pepperoni") {
    this.price = this.price + 5;
  } else if (this.pizzaTopping2 == "pineapple") {
    this.price = this.price + 2;
  } else if (this.pizzaTopping2 == "jalepeno") {
      this.price = this.price + 2;
  }
  if (this.pizzaTopping3 == "pepperoni") {
    this.price = this.price + 5;
  } else if (this.pizzaTopping3 == "pineapple") {
    this.price = this.price + 2;
  } else if (this.pizzaTopping3 == "jalepeno") {
      this.price = this.price + 2;
  } 
  //console.log(this.price);
  return this.price;
}



// User Interface Logic

$(document).ready(function() {
  $("form#pizzaSelection").submit(function(event) {
    event.preventDefault();
    //console.log("submit reached")
    const pizzaSize = $("#pizzaSize").val();
    const pizzaTopping1 = $("#pizzaTopping1").val();
    const pizzaTopping2 = $("#pizzaTopping2").val();
    const pizzaTopping3 = $("#pizzaTopping3").val();

    let newPizza = new Pizza(pizzaSize, pizzaTopping1, pizzaTopping2, pizzaTopping3);
    let finalPrice = newPizza.totalPrice();
    //console.log(finalPrice);
    $("#result").text(finalPrice);
    $("#result").show();
    
  });
 
});
