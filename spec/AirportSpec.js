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

  it ("land adds plane to planes hangar", function(){
    spyOn(Math, 'random').and.returnValue(0);
    airport.land(plane)
    expect(airport.planes()).toContain(plane)
  });

  it ("takeoff removed plane from planes hangar", function(){
    spyOn(Math, 'random').and.returnValue(0);
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.planes()).not.toContain(plane)
  });

  describe ("when stormy", function(){
    it ('prevents landing', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect( function(){ airport.land(plane); } ).toThrow(new Error("Stormy, cannot land!"));
    });

    it ('prevents takeoff', function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect( function(){ airport.takeoff(plane); } ).toThrow(new Error("Stormy, cannot take off!"));
    });
  });

});
