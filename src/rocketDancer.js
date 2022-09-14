var RocketDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // generate a random x speed from [-n to n]
  this.yLocation = $("body").height() * 0.75;
  //debugger;
  this.xSpeed = Math.floor(Math.random() * 250) + 1;
  this.xSpeed *= Math.floor(Math.random() * 2) || -1;
  // generate a random() y speed
  this.ySpeed = Math.floor(Math.random() * 250);
  $('<i class="fa-solid fa-meteor fa-2x"></i>').appendTo(this.$node);
  this.$node.removeClass('dancer');
  this.$node.addClass('rocket-dancer');

  this.setPosition(this.yLocation, left);
  //debugger;
  if (this.xSpeed > 0) {
    this.angle = Math.atan(this.ySpeed / this.xSpeed);
  } else {
    this.angle = Math.atan(this.ySpeed / this.xSpeed) + Math.PI;
  }
  this.angle = this.angle * 180 / Math.PI;
  this.angle = 225 - this.angle;
  console.log(this.angle);
  this.$node.css({transform: 'rotate(' + this.angle + 'deg)'});

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
  this.xLocation += xSpeed;
  this.yLocation -=  ySpeed;
  this.$node.animate({
    top: ySpeed,
    left: xSpeed
  }, this.timeBetweenSteps, 'linear');
  if (this.yLocation <= 0) {
    this.setPosition(0, xLocation);
    this.step = function() {};
  }
  // if ySpeed > y and xSpeed > x
    // make an explosion
  // toggle off
  // this.$node.toggle();
};