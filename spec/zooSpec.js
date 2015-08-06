var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('San Diego')).toEqual('San Diego');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('Open!');
    });
  });

  describe('#close', function(){
    it('should change status to closed', function(){
      expect(zoo.close()).toEqual('Closed!');
    });
  });

  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      expect(zoo.open()).toEqual('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.close()).toEqual('Closed!');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toEqual('Zoo is closed');
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      var door = new Zoo("Bronx","NYC");
      expect(zoo.addAnimal(door)).toEqual('Not a valid animal');
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toEqual("Already an animal!");
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.removeAnimal(pig)).toEqual([]);
    });
  });
});



