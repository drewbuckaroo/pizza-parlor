// Business Logic

function Pizza(pizzaSize, pizzaTopping1, pizzaTopping2, pizzaTopping3) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping1 = pizzaTopping1;
  this.pizzaTopping2 = pizzaTopping2;
  this.pizzaTopping3 = pizzaTopping3;

}

Pizza.prototype.price = function() {
  let price;
  if (this.pizzaSize == "small") {
    price = 10;
  } else if (this.pizzaSize == "medium") {
    price = 20;
  } else if (this.pizzaSize == "large") {
    price = 30;
  }
  if (this.pizzaTopping1 == "pepperoni") {
    price = price + 5;
  } else if (this.pizzaTopping1 == "pineapple") {
    price = price + 2;
  } else if (this.pizzaTopping1 == "jalepeno") {
      price = price + 2;
  }
  if (this.pizzaTopping2 == "pepperoni") {
    price = price + 5;
  } else if (this.pizzaTopping2 == "pineapple") {
    price = price + 2;
  } else if (this.pizzaTopping2 == "jalepeno") {
      price = price + 2;
  }
  if (this.pizzaTopping3 == "pepperoni") {
    price = price + 5;
  } else if (this.pizzaTopping3 == "pineapple") {
    price = price + 2;
  } else if (this.pizzaTopping3 == "jalepeno") {
      price = price + 2;
  }
  console.log(price);
  return price;
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
    $("#result").text(result);
    $("#result").append(newPizza);
    event.preventDefault();
    

  });
 
});
