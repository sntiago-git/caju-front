import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Index from './views/Index';
import Admin from './views/Admin';
import AdminAddInvenario from './views/AdminAddInvenario';
import AdminDoVenta from './views/AdminDoVenta';
import AdminHistVentas from './views/AdminHistVentas';
import AdminRegistro from './views/AdminRegistro';

class App extends Component{

  render(){

    return (

      <Router>
        <Switch>
          <Route exact path = '/' component={Index}></Route>
          <Route exact path = '/Admin' component={Admin}></Route>
          <Route exact path = '/AdminAddInventario' component={AdminAddInvenario}></Route>
          <Route exact path = '/AdminDoVenta' component={AdminDoVenta}></Route>
          <Route exact path = '/AdminHistVentas' component={AdminHistVentas}></Route>
          <Route exact path = '/AdminRegistro' component={AdminRegistro}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
