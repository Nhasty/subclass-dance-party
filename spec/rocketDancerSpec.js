describe('RocketDancer', function() {

  var rocketDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rocketDancer = new RocketDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rocketDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates a vector', function() {
    sinon.spy(rocketDancer.$node, 'animate');
    rocketDancer.step();
    expect(rocketDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rocketDancer, 'step');
      expect(rocketDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rocketDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rocketDancer.step.callCount).to.be.equal(2);
    });
  });
});
