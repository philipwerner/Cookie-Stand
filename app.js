'use strict'

// Random customer function
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capital Hill', 'Alki'];
var multCookies = this.custEachHour;
// 1st and Pike

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  totalSales: 0,
  custEachHour: [],
  totalCookie: 0,
  cookiePerHour: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
  },
  randCust: function() {
    for(var p = 0; p < times.length; p++ ){
      this.custEachHour.push(multCookies * this.custPerHour());
    }
  },
  randCookies: function() {
    for(var c = 0; c < times.length; c++){
      this.cookiePerHour.push(this.avgCookie);
    }
  },
  sales: function() {
    var alkiUl = document.getElementById('alki');
      for(var s = 0; s < times.length; s++){
        var liEl = document.createElement('li');
        liEl.textContent = times[s] + ': ' + this.randCookies[s];
        alkiUl.appendChild(liEl)
      }
    }
  };

alki.sales();
console.log(alki.custPerHour())
console.log(alki.randCust())
console.log(alki.randCookies())
// console.log(pike.hourlyCust());
// pike.render();
