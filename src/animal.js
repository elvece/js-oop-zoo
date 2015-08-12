//animal class constructor, takes name, age and kind, has default setting of awake as false (ie animal starts as asleep)
function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  //default awake is false
  this.awake = false;
}

//method of animal class that returns a string if kind is a pig
Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

//method of animal class that adds one to the age of animal
Animal.prototype.growUp = function(){
  return this.age += 1;
};

//method of animal class that sets the awake value to true, thus waking up the animal
Animal.prototype.wakeUp = function(){
  this.awake = true;
  return this.awake;
};

//method of animal class that feeds the animal if it is awake
Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM";
  }
  else {
    return this.awake;
  }
};

//method of animal class that puts the animal to sleep if it is awake
Animal.prototype.sleep = function(){
  if (this.awake === true){
    this.awake = false;
  }
  return this.awake;
};

//testing export
module.exports = Animal;
