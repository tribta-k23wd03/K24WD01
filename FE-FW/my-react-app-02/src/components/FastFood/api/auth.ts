const AUTH_BASE = "http://localhost:8888/auth";

export type AuthResponse = {
  access_token: string;
  token_type: string; //Bearer
  expires_in: number; // Seconds
};

export async function register(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Register Failed: ${res.status} ${text}`);
  }
  return res.json();
}
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Login Failed: ${res.status} ${text}`);
  }
  return res.json();
}
