import React from "react";

export default function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.description}({item.quantity})
      </span>
      <button onClick={() => onDeleteItem(item.id)} style={{ color: "#fff" }}>
        x
      </button>
    </li>
  );
}
