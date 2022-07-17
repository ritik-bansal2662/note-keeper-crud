import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3008/api/get').then((response) => {
      setNotes(response.data)
    })
  })

  function addNote(newNote) {
    Axios.post('http://localhost:3008/api/insert', {
      title : newNote.title,
      description : newNote.description
    }).then(() => {
      alert("successful Insert")
    })

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    Axios.delete(`http://localhost:3008/api/delete/${id}`)

    // setNotes((prevNotes) => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  }

  // const editNote = (id, newDescription) => {
  //   Axios.put("http://localhost:3008/api/update", {
  //     id: id,
  //     description: newDescription
  //   })
  // }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            description={noteItem.description}
            onDelete={() => {deleteNote(noteItem.id)}}
            // onEdit={() => editNote(noteItem.id, noteItem.newDescription)}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
