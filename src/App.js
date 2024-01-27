import React, { useState } from "react";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
