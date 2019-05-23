import React from 'react';
import TableRow from './components/TableRow.js'
import TableHeader from './components/TableHeader.js'
import Navbar from './components/Navbar.js'
import data from './knicks-data.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TableHeader/>
    </div>
  );
}

export default App;
