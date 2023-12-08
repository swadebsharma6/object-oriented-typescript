{
  // Abstraction-----

  //----------Interface

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
  toyotaCar.startEngine();

  //----------abstraction
}
