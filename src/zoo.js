var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'Closed!';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation) {
  this.location = newLocation;
  return this.location;
};

Zoo.prototype.open = function() {
  this.status = 'Open!';
  return this.status;
};

Zoo.prototype.close = function() {
  this.status = 'Closed!';
  return this.status;
};

Zoo.prototype.isOpen = function() {
  if (this.staus == 'Open!'){
    return 'Open!';
  }
  else {
    return 'Closed!';
  }
};

Zoo.prototype.addAnimal = function() {
  // body...
};



module.exports = Zoo;
