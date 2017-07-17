'use strict'
var custPerHour = function(min, max) {
  this.minCust = minCust;
  this.maxCust = maxCust;
}
custPerHour.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
// 1st and Pike
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custEachHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesEachHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookie: 0,
  render: function(){
    var pikeUL = document.getElementById('pike');
      for(i = 0; i < this.cookiesEachHour.length; i++){
        var liEL = document.createElement('li');
        liEL.textContent = times[i] + ': ' + this.cookiesEachHour[i];
        pikeUL.appendChild(liEL)
      }
  }
  }
}

// Random customer function
