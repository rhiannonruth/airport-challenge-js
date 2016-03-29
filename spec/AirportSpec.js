describe("Airport", function() {

  var airport = new Airport();
  // plane = jasmine.createSpyObj('plane',[<method>])
  var plane

  describe("Plane lands", function(){
    it ("is added to planes array", function(){
      airport.land(plane)
      expect(airport.planes.length).toEqual(1)
    });
  });

});
