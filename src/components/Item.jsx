import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.description}({item.quantity})
      </span>
      <button onClick={() => onDeleteItem(item.id)} style={{ color: "#fff" }}>
        x
      </button>
    </li>
  );
}
