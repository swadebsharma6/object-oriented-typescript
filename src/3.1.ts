{
  // OOP------->Class

  class Animal {
    name: string;
    species: string;
    sound: string;

    //Parameter property
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  dog.makeSound();

  // console.log(dog.name);

  //Example 02
  class Animal2 {
    //Parameter property
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says${this.sound}`);
    }
  }

  const cat = new Animal2("Pushi", "Cat", "Mew Mew");
  cat.makeSound();
  // console.log(cat.sound);
}
