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
};

function handleOrderSubmit(event) {
  event.preventDefault();

  if(!event.target.firstName.value || !event.target.lastName.value || !event.target.address.value || !event.target.city.value || event.target.state.value || event.target.zipcode.value || event.target.quantity.value) {
    return alert('All fields must be filled out to place an order');
  }

  var firstName = event.target.firstName.value;
  var lastName = event.target.lastName.value;
  var address = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zipcode = event.target.zipcode.value;
  var quantity = event.target.quantity.value;

  var newOrder = new Order(firstName, lastName, address, city, state, zipcode, quantity);

  event.target.firstName.value = null;
  event.target.lastName.value = null;
  event.target.address.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zipcode.value = null;
  event.target.quantity.value = null;

  myOrders.push(newOrder);
  newOrder.render();
};

newOrderForm.addEventListener('submit', handleOrderSubmit);
