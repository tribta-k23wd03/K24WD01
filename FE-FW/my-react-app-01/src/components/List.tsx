import { useState } from "react";

function List() {
  let items = ["Sapa", "Tokyo", "Fuji", "Bangkok", "Cambodia", "Thailand", "Newyork"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found.</p>}
      <ul className="list-group">
        {items.map((i, idx) => (
          <li
            key={i}
            className={
              selectedIndex === idx
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(idx)}>
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
