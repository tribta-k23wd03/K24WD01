import { useEffect, useState } from "react";
import type {
  PopulatedMenuItem,
  PopulatedUser,
  Review,
} from "../../components/FastFood/types/types";
import fetchReview from "../../components/FastFood/api/review";
import Stars from "../../components/FastFood/components/Stars";

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

  useEffect(() => {
    fetchReview()
      .then(setData)
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1>Review Lists</h1>
      <ul>
        {data.map((u) => (
          <li key={u._id}>
            <div>{getMenuItem(u.item)}</div>
            <div>by {getUserName(u.user)}</div>
            <div>
              <Stars value={u.rating} title={`Rating: ${u.rating}/5`} />
            </div>
            <div> - {u.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
