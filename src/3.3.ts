{
  // Type guard
  //----Typeof --> type guard------

  type AlphaNumeric = number | string;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(23, "44");
  console.log(result);

  // In guard
  //----in gourd --> type guard------

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // user.name
    if ("role" in user) {
      // user. name---role
      console.log(`My Name is ${user.name} and role is ${user.role}`);
    } else {
      console.log("normal user");
    }
  };

  const normalUser: NormalUser = {
    name: "Swadeb",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin Vai",
    role: "Admin",
  };

  getUser(adminUser);
}
