import React, { Component } from 'react';
import EventList from './components/EventList';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList></EventList>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;