import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div>
      <div className="app">
        {/* header */}
        <Header />
      </div>
      {/* App body */}
      <div className="app__body">
        <Sidebar />
        <Feed/>
        {/* Widgets */}
      </div>
    </div>
    
  );
}

export default App;
