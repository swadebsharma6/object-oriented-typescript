{
  // Abstraction-----

  //----------Interface-to abstraction-------

  interface Vehicle1 {
    //idea
    startEngine(): void;
    stopEngine(): void;
    move(): void;
    // name: string;
    // model: number;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting tje car engine`);
    }

    stopEngine(): void {
      console.log(`I am stop ing the car Engine`);
    }

    move(): void {
      console.log(`I am moving the car`);
    }

    test() {
      console.log("I am testing");
    }
  }

  const toyotaCar = new Car();
  //   toyotaCar.startEngine();

  //----------abstraction----Abstraction

  abstract class Vehicle2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;

    abstract move(): void;
  }

  class ToyotaCar extends Vehicle2 {
    startEngine(): void {
      console.log(`I am stating the car engine`);
    }

    stopEngine(): void {
      console.log(`I am Stopping the car engine`);
    }
    move(): void {
      console.log("I am moning Noe");
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
}
