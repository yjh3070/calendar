import React, { Component } from 'react';
import EventList from './components/EventList';
import ComponentCalendar from './components/ComponentCalendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList></EventList>
        <ComponentCalendar></ComponentCalendar>
      </div>
    );
  }
}

export default App;