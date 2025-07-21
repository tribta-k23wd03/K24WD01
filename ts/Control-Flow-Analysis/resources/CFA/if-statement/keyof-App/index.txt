interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  status: "active" | "blocked";
}

type AccountKey = keyof Account; // id| name| balance|currency|status

class Bank {
  private accounts: Account[] = [];
  private nextId: number = 1;

  createAccount(name: string, currency: string): Account {
    const account: Account = {
      id: this.nextId++,
      name,
      balance: 0,
      currency,
      status: "active",
    };
    this.accounts.push(account);
    return account;
  }
  deposit(accountId: number, amount: number): boolean {
    const acc = this.findAccount(accountId);
    if (acc && acc.status === "active" && amount > 0) {
      acc.balance += amount;
      return true;
    }
    return false;
  }

  withdraw(accountId: number, amount: number): boolean {
    const acc = this.findAccount(accountId);
    if (acc && acc.status === "active" && amount <= acc.balance) {
      acc.balance -= amount;
      return true;
    }
    return false;
  }
  blockAccount(accountId: number): boolean {
    const acc = this.findAccount(accountId);
    if (acc) {
      acc.status = "blocked";
      return true;
    }
    return false;
  }

  getAccount<K extends AccountKey>(
    accountId: number,
    key: K
  ): Account[K] | undefined {
    const acc = this.findAccount(accountId);
    return acc ? acc[key] : undefined;
  }

  private findAccount(accountId: number): Account | undefined {
    return this.accounts.find((a) => a.id === accountId);
  }
}

const bank = new Bank();
const acc1 = bank.createAccount("Harry Potter", "USD");

console.log(acc1);
bank.deposit(acc1.id, 10_000); // 10_000
bank.withdraw(acc1.id, 400); // 9_600

console.log(bank.getAccount(acc1.id, "name")); // Harry...
console.log(bank.getAccount(acc1.id, "balance")); //9_600
console.log(bank.getAccount(acc1.id, "status")); // active

bank.blockAccount(acc1.id);
bank.deposit(acc1.id, 10_000); 
bank.withdraw(acc1.id, 400); 
console.log(acc1);


