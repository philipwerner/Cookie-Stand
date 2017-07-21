'use strict';

var myOrders = [];

var Order = function(firstName, lastName, address, city, state, zipcode, quantity){
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.quantity = quantity;
  this.order = [];
  this.calcOrderTotal = function(){
    for(var i = 0; i < myOrders.length; i++){
      this.order.push(Math.ceil(this.quantity[i] * 2));
      this.orderTotal += this.order[i];
    }
  };
  this.orderTotal = 0;
  myOrders.push(this);
};

Order.prototype.render = function(){
  for(var i = 0; i < myOrders.length; i++){
    alert('Your total is $' + this.order[i]);
  }
};

// function yourTotal(){
// };

function handleOrderSubmit(event) {
  event.preventDefault();

  if(!event.target.firstName.value || !event.target.lastName.value || !event.target.address.value || !event.target.city.value || !event.target.state.value || !event.target.zipCode.value || !event.target.qty.value) {
    return alert('All fields must be filled out to place an order');
  }

  var firstName = event.target.firstName.value;
  var lastName = event.target.lastName.value;
  var address = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zipcode = event.target.zipCode.value;
  var quantity = parseInt(event.target.qty.value);

  var newOrder = new Order(firstName, lastName, address, city, state, zipcode, quantity);

  event.target.firstName.value = null;
  event.target.lastName.value = null;
  event.target.address.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zipCode.value = null;
  event.target.qty.value = null;

  myOrders.push(newOrder);
  newOrder.render();
  // yourTotal();
};

newOrderForm.addEventListener('submit', handleOrderSubmit);
