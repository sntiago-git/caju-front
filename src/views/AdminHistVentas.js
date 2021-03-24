import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/admin/SideBar';
import TablaHistVentas from '../components/admin/TablaHistVentas';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <TablaHistVentas />
    </div>
  );
}

export default App;