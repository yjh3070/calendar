import React, { Component } from 'react';
import EventList from './components/EventList';
import RightCalendar from './components/RightCalendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList></EventList>
        <RightCalendar></RightCalendar>
      </div>
    );
  }
}

export default App;