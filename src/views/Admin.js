import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/admin/SideBar';
import Tabla from '../components/admin/Tabla';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <Tabla />
    </div>
  );
}

export default App;