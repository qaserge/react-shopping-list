import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Start adding some items to your list!</footer>
    );

  const numItems = items.length;
  const numPurchased = items.filter((item) => item.purchased).length;
  const percentage = Math.round((numPurchased / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "All items have been purchased!"
        : `There are ${numItems} items in the list, ${numPurchased} of them have already been purchased (${percentage}%).`}
    </footer>
  );
}
