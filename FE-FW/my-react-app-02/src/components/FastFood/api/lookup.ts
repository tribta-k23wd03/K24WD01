const API_BASE = "http://localhost:9999";

export type IdName = { _id: string; name?: string; email?: string };

export async function fetchUser(): Promise<IdName[]> {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
}

export async function fetchMenu(): Promise<IdName[]> {
  const res = await fetch(`${API_BASE}/menu`);
  return res.json();
}
