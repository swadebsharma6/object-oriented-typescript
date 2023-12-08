{
  // POLYMORPHISM

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hrs a day`);
    }
  }

  class Student {
    getSleep() {
      console.log("Student sleeps 6 hrs a day");
    }
  }

  class Developer {
    getSleep() {
      console.log("Developer sleeps 4 hrs a day");
    }
  }

  const person1 = new Person();
}
