'use strict';
function Airport(number = 10, weather) {
  this._CAPACITY = number
  this._hangar = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane){
  if(this._weather.isStormy()) {
    throw new Error("Stormy, cannot land!");
  }
  if(this._hangar.length === this._CAPACITY) {
    throw new Error('Hanger full!');
  }
  this._hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  if(this._weather.isStormy()) {
    throw new Error("Stormy, cannot take off!");
  }
  var indexTodelete = this._hangar.indexOf(plane)
  this._hangar.splice(indexTodelete,1);
};
