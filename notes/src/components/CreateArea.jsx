import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import './CreateArea.css';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.description}
        />
        <button onClick={handleClick}>
          <GrAdd />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
