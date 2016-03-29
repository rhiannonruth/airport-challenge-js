function Weather() {
  this._STORMY = 0.2
}

Weather.prototype.isStormy = function() {
  return (Math.random() > this._STORMY);
};
