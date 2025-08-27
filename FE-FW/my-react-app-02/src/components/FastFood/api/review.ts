import type { Review } from "../types/types";

const API_BASE = "http://localhost:9999";

export default async function fetchReview(): Promise<Review[]> {
  const res = await fetch(`${API_BASE}/review`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch api: ${res.status} ${text}`);
  }
  return res.json();
}

export async function createReview(payload: {
  user: string;
  item: string;
  rating: number;
  comment: string;
}): Promise<Review> {
  const res = await fetch(`${API_BASE}/review`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Created FAILED: ${res.status} ${text}`);
  }

  return res.json();
}

export async function deleteReview(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/review/${id}`, { method: "DELETE" });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`NOT FOUND ANY ID: ${res.status} ${text}`);
  }
}
