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
      expect(this.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(this.animals.addAnimal()).toEqual();
    });
    it('should add an animal to the animals array', function(){
      // add spec
    });

    it('should only add instances of animals', function(){
      // add spec
    });

    it('should not add duplicates', function(){
      // add spec
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      // add spec
    });
  });
});


