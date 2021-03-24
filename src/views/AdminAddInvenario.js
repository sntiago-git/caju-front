import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/admin/SideBar';
import RegistroInventario from '../components/admin/RegistroInventario';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <RegistroInventario />
    </div>
  );
}

export default App;