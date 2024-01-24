import React from "react";

export default function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.description}({item.quantity})
      </span>
      <button style={{ color: "#fff" }}>x</button>
    </li>
  );
}
