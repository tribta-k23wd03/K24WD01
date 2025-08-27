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

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.user || !form.item || form.rating < 1 || form.rating > 5) {
      alert("Input user & item (ObjectId), rating (1 -> 5)");
      return;
    }

    setProcessing(true);
    const created = await createReview(form);
    setData((p) => [created, ...p]);
    setForm({ user: "", item: "", rating: 0, comment: "" });
  };

  const onDelete = async (id: string) => {
    await deleteReview(id);
    setData((p) => p.filter((r) => r._id !== id));
  };

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Review Lists</h1>
      </header>
      <form action=""></form>
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
              </div>
            </div>
            <p style={{ marginTop: 10, marginBottom: 0 }}> - {u.comment}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
