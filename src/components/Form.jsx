import React from "react";

export default function Form() {
  return (
    <form className="add-form">
      <select name="" id="">
        <option value="{1}">1</option>
        <option value="{2}">2</option>
        <option value="{3}">3</option>
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}
