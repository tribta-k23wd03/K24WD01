"use strict";
class Bank {
    constructor() {
        this.accounts = [];
        this.nextId = 1;
    }
    createAccount(name, currency) {
        const account = {
            id: this.nextId++,
            name,
            balance: 0,
            currency,
            status: "active",
        };
        this.accounts.push(account);
        return account;
    }
    deposit(accountId, amount) {
        const acc = this.findAccount(accountId);
        if (acc && acc.status === "active" && amount > 0) {
            acc.balance += amount;
            return true;
        }
        return false;
    }
    withdraw(accountId, amount) {
        const acc = this.findAccount(accountId);
        if (acc && acc.status === "active" && amount <= acc.balance) {
            acc.balance -= amount;
            return true;
        }
        return false;
    }
    blockAccount(accountId) {
        const acc = this.findAccount(accountId);
        if (acc) {
            acc.status = "blocked";
            return true;
        }
        return false;
    }
    getAccount(accountId, key) {
        const acc = this.findAccount(accountId);
        return acc ? acc[key] : undefined;
    }
    findAccount(accountId) {
        return this.accounts.find((a) => a.id === accountId);
    }
}
const bank = new Bank();
const acc1 = bank.createAccount("Harry Potter", "USD");
console.log(acc1);
bank.deposit(acc1.id, 10000); // 10_000
bank.withdraw(acc1.id, 400); // 9_600
console.log(bank.getAccount(acc1.id, "name")); // Harry...
console.log(bank.getAccount(acc1.id, "balance")); //9_600
console.log(bank.getAccount(acc1.id, "status")); // active
bank.blockAccount(acc1.id);
bank.deposit(acc1.id, 10000);
bank.withdraw(acc1.id, 400);
console.log(acc1);
