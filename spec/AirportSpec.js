'use strict';
describe("Airport", function(){
  var airport;
  var plane;
  var plane2;

  beforeEach(function(){
    airport = new Airport();
    plane   = jasmine.createSpy('plane');
    plane2 = jasmine.createSpy('plane2');
  });

  it('has empty hangar by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('landing', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    it("land adds plane to planes hangar", function(){
      airport.land(plane)
      expect(airport.planes()).toContain(plane)
    });

    it('does not land when hangar full', function(){
      for(var i = 1; i <= 10; i++){
           airport.land(plane);
      }
      expect(airport.planes().length).toEqual(10);
      expect( function(){ airport.land(plane); } ).toThrow(new Error("Hanger full!"));
    });
  });


  it("takeoff removed plane from planes hangar", function(){
    spyOn(Math, 'random').and.returnValue(0);
    airport.land(plane)
    airport.land(plane2)
    airport.takeoff(plane)
    expect(airport.planes()).not.toContain(plane)
    expect(airport.planes()).toContain(plane2)
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
