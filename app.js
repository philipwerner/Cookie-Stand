'use strict'

// Random customer function
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(location, minCustomers, maxCustomers, avgCookiesPerSale){
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
  this.render = function(){
    var alkilist = document.getElementById('alki');
    this.calcCookiesSoldEachHour();
    for(var i = 0; i < times.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
      alkilist.appendChild(liEl)
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    alkilist.appendChild(liEl);
    }
    this.render(myStores);
    myStores.push(this);
  };

var myStores = [];

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function storesInTheDOM(){
  var storeList = document.getElementById('stores');
  for(var i = 0; i < myStores.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = myStores[i].location;
    storeList.appendChild(liEl);
  }
}
// storesInTheDOM();

function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Tail Size';
  trEl.appendChild(thEl);

  catTable.appendChild(trEl);
}
