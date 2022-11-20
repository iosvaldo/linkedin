import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* <h1>building a LinkedIn App</h1> */}

      {/* header */}
      <Header/>

      {/* App body */}
      <div className="app__body">
        <Sidebar/>
      {/* Feed */}
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
