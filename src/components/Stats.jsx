import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Start adding some items to your list!</footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "All items are packed!"
        : `There are ${numItems} elements in the list, and ${numPacked} are already
      packed (${percentage}%).`}
    </footer>
  );
}
