import React from 'react';

import MemoryCard from './components/Card.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1> Memory Game</h1>
        <h3>Match Cards To Win</h3>
      </header>
      <div>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
    </div>
  );
}

export default App;
