import { useEffect, useState } from "react";
import type {
  PopulatedMenuItem,
  PopulatedUser,
  Review,
} from "../../components/FastFood/types/types";
import fetchReview, {
  createReview,
  deleteReview,
} from "../../components/FastFood/api/review";
import Stars from "../../components/FastFood/components/Stars";
import {
  fetchMenu,
  fetchUser,
  type IdName,
} from "../../components/FastFood/api/lookup";

type NewReview = {
  user: string;
  item: string;
  rating: number;
  comment: string;
};

function getUserName(u: Review["user"]) {
  if (u && typeof u === "object") {
    const pu = u as PopulatedUser;
    return pu.name ?? String(pu._id);
  }
  return String(u);
}

function getMenuItem(m: Review["item"]): string {
  if (m && typeof m === "object") {
    const pm = m as PopulatedMenuItem;
    return pm.name ?? String(pm._id);
  }
  return String(m);
}

export default function Review() {
  const [data, setData] = useState<Review[]>([]);

  const [users, setUsers] = useState<IdName[]>([]);
  const [items, setItems] = useState<IdName[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<NewReview>({
    user: "",
    item: "",
    rating: 0,
    comment: "",
  });
  const [processing, setProcessing] = useState(false);
  const ctrl = new AbortController();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchReview()
      .then(setData)
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message ?? "Loading Failed");
      })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, []);

  useEffect(() => {
    const run = async () => {
      const [u, i] = await Promise.all([fetchUser(), fetchMenu()]);
      setUsers(u);
      setItems(i);
    };
    run();
  }, []);

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.user || !form.item || form.rating < 1 || form.rating > 5) {
      alert("Input user & item (ObjectId), rating (1 -> 5)");
      return;
    }

    setProcessing(true);
    const created = await createReview(form);

    const u = users.find((x) => x._id === form.user);
    const m = items.find((x) => x._id === form.item);

    const created2 = {
      ...created,
      user:
        typeof created.user === "string"
          ? u
            ? { _id: created.user, name: u.name ?? u.email }
            : created.user
          : created.user,
      item:
        typeof created.item === "string"
          ? m
            ? { _id: created.item, name: m.name }
            : created.item
          : created.item,
    };

    setData((p) => [created2, ...p]);

    setForm({ user: "", item: "", rating: 0, comment: "" });
    setProcessing(false);
  };

  const onDelete = async (id: string) => {
    await deleteReview(id);
    setData((p) => p.filter((r) => r._id !== id));
  };

  const userLabel = (u: IdName) => u.name ?? u.email ?? u._id;
  const itemLabel = (i: IdName) => i.name ?? i._id;

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Review Lists</h1>
      </header>

      <form onSubmit={onCreate}>
        <div>
          <select
            value={form.user}
            onChange={(e) => setForm({ ...form, user: e.target.value })}>
            <option value={""}>--Pick User--</option>
            {users.map((u) => (
              <option key={u._id} value={u._id}>
                {userLabel(u)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={form.item}
            onChange={(e) => setForm({ ...form, item: e.target.value })}>
            <option value={""}>--Pick Item--</option>
            {items.map((i) => (
              <option key={i._id} value={i._id}>
                {itemLabel(i)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <input
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            placeholder="Enter Your Comment"
          />
        </div>
        <div>
          <button className="btn primary" type="submit" disabled={processing}>
            {processing ? "Sending Review..." : "Send Review"}
          </button>
        </div>
      </form>
      <ul className="list">
        {data.map((u) => (
          <li key={u._id} className="item">
            <div className="itemHead">
              <div className="meta">
                <div>
                  <strong>{getMenuItem(u.item)}</strong>
                </div>
                <div className="muted">by {getUserName(u.user)}</div>
              </div>

              <div>
                <Stars value={u.rating} title={`Rating: ${u.rating}/5`} />
                <button className="btn danger" onClick={() => onDelete(u._id)}>
                  Delete
                </button>
              </div>
            </div>
            <p style={{ marginTop: 10, marginBottom: 0 }}> - {u.comment}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
