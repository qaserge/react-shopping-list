import React from "react";
import Item from "./Item";

export default function PackingList() {
  const initialItems = [
    { id: 1, description: "item_1", quantity: 4, packed: false },
    { id: 2, description: "item_2", quantity: 1, packed: true },
    { id: 3, description: "item_3", quantity: 2, packed: false },
  ];

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
