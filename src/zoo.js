//requires data from animal file
var Animal = require("./animal");

//zoo class constructor, takes name and location and has default setting of closes and empty array of animals
function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'Closed!';
  this.animals = [];
}

//method of zoo class that changes the zoo location
Zoo.prototype.changeLocation = function(newLocation) {
  this.location = newLocation;
  return this.location;
};

//method of zoo class that changes the status of the zoo to open
Zoo.prototype.open = function() {
  this.status = 'Open!';
  return this.status;
};

//method of zoo class that changes the status of the zoo to closed
Zoo.prototype.close = function() {
  this.status = 'Closed!';
  return this.status;
};

//method of zoo class that checks to see if the zoo is open
Zoo.prototype.isOpen = function() {
  if (this.status === 'Open!'){
    return 'The zoo is open!';
  }
  else {
    return 'The zoo is closed!';
  }
};

//method of zoo class that adds the animal to the zoo animal array if the zoo is open, if the animal is an instance of the Animal class, and if the animal is not already in the zoo animal array; returns error messages if zoo is closed or animal is not a valid animal, otherwise returns the last animal in the array
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

//method of the zoo class that removes the animal from the zoo animal array if the animal is in the animals array, returns the zoo animal array
Zoo.prototype.removeAnimal = function(animal) {
  var index = this.animals.indexOf(animal);
  if(this.status == 'Open!' && index >= 0){
    this.animals.splice(index, 1);
  }
  return this.animals;
};

module.exports = Zoo;
