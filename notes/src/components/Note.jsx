import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from 'react-icons/bi';
import Axios from 'axios';
import './Note.css';

function Note(props) {
  const [newDescription, setNewDescription] = useState('')

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  const handleEditClick = () => {
    // props.onEdit(props.id, newDescription)
    Axios.put("http://localhost:3008/api/update", {
      id: props.id,
      description: newDescription
    })
    setNewDescription('')
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handleEditClick}>
        <BiPencil />
      </button>
      <input className="edit-input" type='text' onChange={(e) => {
        setNewDescription(e.target.value)
      }} />
      <button onClick={handleDeleteClick}>
        <AiFillDelete />
      </button>
    </div>
  );
}

export default Note;
