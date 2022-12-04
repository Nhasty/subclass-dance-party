// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.xLocation = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step()
  this.setPosition(top, left);
};
// fixed with passing timeBetweenSteps into scope of the function correctly
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.step = function() {};
  setTimeout(this.setPosition.bind(this, '75vh', this.left), 1000);
  setTimeout(function() {
    delete this.step;
    this.step();
    this.setPosition(this.yLocation || this.top, this.left);
  }.bind(this), 3000);
};


// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body