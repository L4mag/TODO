import React from 'react';

import './note.css';

const Note = ({ title, description, createdAt }) => (
  <>
    <h3 className="note-title">{ title }</h3>
    <p className="note-description">{ description }
      <span className="note-created-at">{ createdAt }</span>
    </p>
  </>
);

export default Note;