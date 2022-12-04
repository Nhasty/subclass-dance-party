var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.yLocation = $('body').height() * 0.75;
  //this.timeBetweenSteps = 999;
  //some set location on screen
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(this.yLocation, left);
  this.timeBetweenSteps = 1000;
  // generate a random value (75vh and the top of the screen)
  this.bounceHeight = Math.floor(Math.random() * 75) + 'vh';
}
BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this.$node.animate({
    top: this.bounceHeight
  }, this.timeBetweenSteps / 2); // 2nd input to animate is the duration
  this.$node.animate({
    top: this.yLocation
  }, this.timeBetweenSteps / 2);
}