'use strict';
describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
  airport = new Airport();
  plane   = jasmine.createSpy('plane');
  });
  it ('has empty hangar by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it ("is added to planes array", function(){
    airport.land(plane)
    expect(airport.planes()).toContain(plane)
  });

  it ("is removed from planes array", function(){
    airport.takeoff(plane)
    expect(airport.planes()).not.toContain(plane)
  });

});
