'use strict'

// Random customer function
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capital Hill', 'Alki'];
//
// // 1st and Pike
// var pikePlace = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < times.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
//     }
//   },
//   cookiesSoldEachHour: [],
//   calcCookiesSoldEachHour: function(){
//   this.calcCustomersPerHour();
//     for(var i = 0; i < times.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     }
//   },
//   totalCookiesPerDay: 0,
//   render: function(){
//     var pikelist = document.getElementById('pike');
//     this.calcCookiesSoldEachHour();
//     for(var i = 0; i < times.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
//       pikelist.appendChild(liEl)
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     pikelist.appendChild(liEl);
//   }
// };
// pikePlace.render();
//
// // SeaTac
// var seaTac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < times.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
//     }
//   },
//   cookiesSoldEachHour: [],
//   calcCookiesSoldEachHour: function(){
//   this.calcCustomersPerHour();
//     for(var i = 0; i < times.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     }
//   },
//   totalCookiesPerDay: 0,
//   render: function(){
//     var seataclist = document.getElementById('seatac');
//     this.calcCookiesSoldEachHour();
//     for(var i = 0; i < times.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
//       seataclist.appendChild(liEl)
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     seataclist.appendChild(liEl);
//   }
// };
// seaTac.render();
//
// // Seattle Center
// var seattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < times.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
//     }
//   },
//   cookiesSoldEachHour: [],
//   calcCookiesSoldEachHour: function(){
//   this.calcCustomersPerHour();
//     for(var i = 0; i < times.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     }
//   },
//   totalCookiesPerDay: 0,
//   render: function(){
//     var seattleCenterlist = document.getElementById('seattleCenter');
//     this.calcCookiesSoldEachHour();
//     for(var i = 0; i < times.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
//       seattleCenterlist.appendChild(liEl)
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     seattleCenterlist.appendChild(liEl);
//   }
// };
// seattleCenter.render();
//
// // Capitol Hill
// var capitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < times.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
//     }
//   },
//   cookiesSoldEachHour: [],
//   calcCookiesSoldEachHour: function(){
//   this.calcCustomersPerHour();
//     for(var i = 0; i < times.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     }
//   },
//   totalCookiesPerDay: 0,
//   render: function(){
//     var capitolHillList = document.getElementById('capHill');
//     this.calcCookiesSoldEachHour();
//     for(var i = 0; i < times.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
//       capitolHillList.appendChild(liEl)
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     capitolHillList.appendChild(liEl);
//   }
// };
// capitolHill.render();
//
// // Alki
// var alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < times.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
//     }
//   },
//   cookiesSoldEachHour: [],
//   calcCookiesSoldEachHour: function(){
//   this.calcCustomersPerHour();
//     for(var i = 0; i < times.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     }
//   },
//   totalCookiesPerDay: 0,
//   render: function(){
//     var alkilist = document.getElementById('alki');
//     this.calcCookiesSoldEachHour();
//     for(var i = 0; i < times.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = times[i] + ': ' + this.cookiesSoldEachHour[i];
//       alkilist.appendChild(liEl)
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     alkilist.appendChild(liEl);
//   }
// };
// alki.render();

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
  this.totalCookiesPerDay = [];
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
    myStores.push(this);
  };

var myStores = [];

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function storesInTheDOM(){
  var storetList = document.getElementById('stores');
  for(var i = 0; i < myStores.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = myStores[i].cookiesSoldEachHour;
    storeList.appendChild(liEl);
  }
}
