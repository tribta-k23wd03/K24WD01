import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function List({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(idx);
              onSelectedItem(i);
            }}>
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
