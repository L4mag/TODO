import React from 'react';
import Note from './note';

import './notes-group.css';

import getData from '../data/GetData';

class NotesGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    getData()
      .then(notes => {
        this.setState({ notes });
        console.log(this.state.notes);
      });
  }

  parseDate = date => {
    return new Date(Date.parse(date))
      .toLocaleDateString('ru-RU', {
          hour: 'numeric',
          minute: 'numeric'
      })
  }

  render() {
    return(
      <div className="notes-group">
        {this.state.notes.map(({ id, title, description, createdAt }) => {
          return(
            <Note
              key={ id }
              title={ title }
              description={ description }
              createdAt={ this.parseDate(createdAt) }
            />)
        })}
      </div>
    );
  }
}

export default NotesGroup;