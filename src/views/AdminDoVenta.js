import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/admin/SideBar';
import DoVenta from '../components/admin/DoVenta';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <DoVenta />
      <SideBar />
      
    </div>
  );
}

export default App;