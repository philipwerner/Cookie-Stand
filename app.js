'use strict'

// Random customer function
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capital Hill', 'Alki'];
// 1st and Pike
var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  custPerHour:
    function(maxCust, minCust) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust
    }
};

var seaTac = {
  name: 'SeaTac',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  custPerHour:
    function(maxCust, minCust) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust
    }
};

var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  custPerHour:
    function(maxCust, minCust) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust
    }
};

var capHill = {
  name: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  custPerHour:
    function(maxCust, minCust) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust
    }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  custPerHour:
    function(maxCust, minCust) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust
    }
};

  // function custPerHour() {
  //   for (var i = 0; i < this.custEachHour.length; i++) {
  //     this.custEachHour[i] = randomCust(this.minCust, this.maxCust);
  //   }
  // },
  // function cookiesSold(){
  //   for (var i = 0; i < this.cookiesEachHour.length; i++);
  //   this.cookiesEachHour[i] = this.custEachHour[i] * this.avgCookie;
  // },
  // render: function(){
  //   var pikeUL = document.getElementById('pike');
  //   for (i = 0; i < this.cookiesEachHour.length; i++){
  //   var liEL = document.createElement('li');
  //   liEL.textContent = times[i] + ': ' + this.cookiesEachHour[i];
  //   pikeUL.appendChild(liEL)
  //   }
  // }
console.log(pike.custEachHour)
console.log(pike.custPerHour())
console.log(pike.hourlyCust());
// pike.render();

// hourlyCust:
//   function() {
//     for(var i = 0; i < times.length; i++){
//       this.custEachHour.push(this.custPerHour())
//       this.totalSales += this.custEachHour[i]
//     }
//     return
//   }
