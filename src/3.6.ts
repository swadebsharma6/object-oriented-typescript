{
  // Getter And Setter

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

    // getter
    get Balance() {
      return this._balance;
    }

    // setter
    set Deposit(amount: number) {
      this._balance = this.Balance + amount;
    }
  }

  const poorManAccount = new BankAccount(111, "Mr.Gorib", 2000);

  poorManAccount.Deposit = 5000;

  const myBalance = poorManAccount.Balance; //Using it like property

  console.log("My Balance:", myBalance);

  //   poorManAccount.id =2222            // you should not do this
  //   poorManAccount.balance = 0;          // this is not way

  //   const result = poorManAccount.addDeposit(200);
  //   console.log("Deposit:", result);

  //   const balance = poorManAccount.getBalance();
  //   console.log("balance", balance);
}
