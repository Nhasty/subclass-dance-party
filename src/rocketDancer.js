var RocketDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // generate a random x speed from [-n to n]
  this.yPosition = $("body").height() * 0.75
  this.xSpeed = Math.floor(Math.random() * -2) * Math.floor(Math.random() * 250) || Math.floor(Math.random() * 250)
  // generate a random() y speed
  this.ySpeed = Math.floor(Math.random() * 250);
  this.setPosition(this.yPosition, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
};

RocketDancer.prototype = Object.create(Dancer.prototype);
RocketDancer.prototype.constructor = RocketDancer;

RocketDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // animate  movment of node by incrementing top and left by y speed and x speed
  var ySpeed = '-=' + this.ySpeed;
  var xSpeed = '+=' + this.xSpeed;
  this.$node.animate({
    top: ySpeed,
    left: xSpeed
  }, this.timeBetweenSteps);

  // if ySpeed > y and xSpeed > x
    // make an explosion
  // toggle off
  // this.$node.toggle();
};