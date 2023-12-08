{
  // Access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //method
    public addDeposit(amount: number) {
      return (this._balance = this._balance + amount);
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorManAccount = new BankAccount(111, "Mr.Gorib", 2000);
  //   poorManAccount.id =2222 // you should not do this
  //   poorManAccount.balance = 0; // this is not way

  const result = poorManAccount.addDeposit(200);
  console.log("Deposit:", result);

  const balance = poorManAccount.getBalance();
  console.log("balance", balance);
}
