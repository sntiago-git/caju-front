import React from 'react';
import Nav from '../components/Nav';
import Info from '../components/Info';
import Productos from '../components/Productos';
import Visitanos from '../components/Visitanos';
import Footer from '../components/Footer';
import Bienvenida from '../components/Bienvenida';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Bienvenida />
      <Nav />
      <Info />
      <Productos />
      <Visitanos />
      <Footer />
    </div>
  );
}

export default App;
