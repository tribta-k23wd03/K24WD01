import { useState, type FormEvent } from "react";

import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login(email, password);
      nav("/");
    } catch (e: any) {
      setErr(e.message ?? "Login Failed");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Sign In
        </button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
}
