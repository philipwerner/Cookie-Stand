'use strict'
// GLOBAL VARIABLES
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var salesTable = document.getElementById('cookieShops');
var myStores = [];
var clearSalesForm = document.getElementById('clearForm');

// CONSTRUCTOR
var Store = function(location, minCustomers, maxCustomers, avgCookiesPerSale){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.calcCustomersPerHour = function(){
    for(var i = 0; i < times.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
  this.calcCustomersPerHour();
    for(var i = 0; i < times.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };
  this.totalCookiesPerDay = 0;
  myStores.push(this);
  this.calcCookiesSoldEachHour();
};

Store.prototype.render = function(){
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var i = 0; i < times.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);

  salesTable.appendChild(trEl);
};


new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// FUNCTION DECLARATIONS

function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);

  for(var i = 0; i < times.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);

  salesTable.appendChild(trEl);
}


function allCookies(){
  for(var i = 0; i < myStores.length; i++){
    myStores[i].render();
  }
};

// function renderMyStores(){
//   cookieShops.innerHTML = '';
//   makeHeaderRow();
//   for(var i = 0; i < myStores.length; i++) {
//     myStores[i].render();
//   }
//   // makeHeaderRow();
//   // allCookies();
// };

function handleStoreSubmit(event) {
  console.log(event.target.newLocation.value);
  event.preventDefault();
  if(!event.target.newLocation.value || !event.target.newMinCustomers.value || !event.target.newMaxCustomers.value || !event.target.newAvgCookiesPerSale.value) {
    return alert('All fields for new store must be filled out');
  }

  var location = event.target.newLocation.value;
  var minCustomers = event.target.newMinCustomers.value;
  var maxCustomers = event.target.newMaxCustomers.value;
  var avgCookiesPerSale = event.target.newAvgCookiesPerSale.value;

  var newStore = new Store(location, minCustomers, maxCustomers, avgCookiesPerSale);

  event.target.newLocation.value = null;
  event.target.newMinCustomers.value = null;
  event.target.newMaxCustomers.value = null;
  event.target.newAvgCookiesPerSale.value = null;


  myStores.push(newStore);
  newStore.render();
};

makeHeaderRow();
allCookies();
addStoreForm.addEventListener('submit', handleStoreSubmit);

// clearSalesForm.addEventListener('click', function(){
//
//   alert('You cleared the form');
// });
