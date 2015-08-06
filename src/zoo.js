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
  if (this.status == 'Open!'){
    return this.status;
  }
  else {
    return 'Closed!';
  }
};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status == 'Open!'){
    if (animal instanceof Animal){
      if(this.animals.indexOf(animal) >= 0){
        return "Already an animal!";
      }
      else {
        this.animals.push(animal);
        return this.animals[this.animals.length - 1];
      }
    }
    else {
      return "Not a valid animal";
    }
  }
  else {
    return "Zoo is closed";
  }
};

module.exports = Zoo;
