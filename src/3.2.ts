{
  // inheritance class

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHrs: number) {
      console.log(`${this.name} will sleep for :${numOfHrs}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr.swadeb", 27, "Dhaka");
  student1.getSleep(8);

  class Teacher extends Parent {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    // getSleep(numOfHrs: number) {
    //   console.log(`${this.name} will sleep for :${numOfHrs}`);
    // }

    takeClass(numOfClass: number) {
      console.log(
        `${this.name} is a ${this.designation} will take class ${numOfClass}`
      );
    }
  }

  const teacher = new Teacher("Mr.Rakib", 27, "Dhaka", "Professor");
  teacher.takeClass(2);
}
