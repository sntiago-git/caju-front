import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/admin/SideBar';
import RegistroClientes from '../components/admin/RegistroClientes';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <RegistroClientes />
    </div>
  );
}

export default App;