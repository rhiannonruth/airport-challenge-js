describe("Airport", function() {

  var airport = new Airport();
  // plane = jasmine.createSpyObj('plane', 'takeoff')
  var plane = 'plane'
  // var plane2 - value is undefined

  describe("Plane lands", function(){
    it ("is added to planes array", function(){
      airport.land(plane)
      // airport.land(plane2)
      expect(airport.planes).toContain('plane')
    });
  });

  describe("Plane takes off", function(){
    it ("is removed from planes array", function(){
      airport.takeoff(plane)
      expect(airport.planes).not.toContain('plane')
    });
  });

});
