'use strict';
function Airport(weather) {
  this._hangar = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function(){
  return this._hangar;
}

Airport.prototype.land = function(plane){
  if(this._weather.isStormy()) {
    throw new Error("Stormy, cannot land!");
  }
  this._hangar.push(plane)
}

Airport.prototype.takeoff = function(plane){
  if(this._weather.isStormy()) {
    throw new Error("Stormy, cannot take off!");
  }
  this._hangar.splice(plane)
}
