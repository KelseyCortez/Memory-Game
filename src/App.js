import React from 'react';

import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card name="Project" likes={1}></Card>
      <Card name="Project 101" likes={2}></Card>
      <Card name="Project 102" likes={3}></Card>
      <Card name="Project 103"likes={4}></Card>
      <Card name="Project 104"likes={5}></Card>
    </div>
  );
}

export default App;
