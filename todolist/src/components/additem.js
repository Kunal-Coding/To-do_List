import React, { useState } from "react";
import "./additem.css";

const AddItem = (props) => {
  const [entry, setEntry] = useState(""); // Use state to manage input value

  const submitHandler = (event) => {
    event.preventDefault();

    const newitem = {
      itemid: Math.trunc(Math.random() * 100 + 1),
      itemname: entry,
    };
    props.onAddItem(newitem);

    setEntry(""); // Clear the input field
  };

  const entryHandler = (event) => {
    setEntry(event.target.value); // Update the input value
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" value={entry} onChange={entryHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
