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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
