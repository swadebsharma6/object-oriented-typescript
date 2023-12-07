{
  // Instance of gourd

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I Am Making Sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`I Am barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log(`I Am Mewing`);
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("DOG VAI", "dog");
  //   dog.makeBark();

  const cat = new Cat("MIM", "cat");

  // cat.makeMew();

  getAnimal(cat);
}
