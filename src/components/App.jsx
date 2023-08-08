import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function updateNotes(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={updateNotes} />
      {notes.map((entry, index) => (
        <Note
          key={index}
          id={index}
          title={entry.title}
          content={entry.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
