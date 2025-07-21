interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  status: "active" | "blocked";
}
