'use strict'

// Random customer function
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capital Hill', 'Alki'];

// 1st and Pike
var pikePlace = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < times.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function(){
  this.calcCustomersPerHour();
    for(var i = 0; i < times.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function(){
    var pikelist = document.getElementById('pike');
    this.calcCookiesSoldEachHour();
    for(var i = 0; i < times.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
      pikelist.appendChild(liEl)
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    pikelist.appendChild(liEl);
  }
};
pikePlace.render();

// SeaTac
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < times.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function(){
  this.calcCustomersPerHour();
    for(var i = 0; i < times.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function(){
    var seataclist = document.getElementById('seatac');
    this.calcCookiesSoldEachHour();
    for(var i = 0; i < times.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
      seataclist.appendChild(liEl)
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    seataclist.appendChild(liEl);
  }
};
seaTac.render();
